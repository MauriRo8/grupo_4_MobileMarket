const express = require("express");

const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require ('multer');
const bcrypt = require ('bcryptjs');

const {body} = require ('express-validator');

const usersMetodos = require (path.resolve(__dirname,"../controllers/usersControlador"));

let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,path.resolve(__dirname,'../../public/images/usuarios'))
    },
    filename:(req,file,cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
    cb(null,fileName)
    }

});

const upload = multer({storage});

const validacionesUsuarios = [
body('nombre').isLength({min:3}).withMessage('El nombre es demasiado corto'),
body('email').isEmail().withMessage('Email invalido'),
body('password').isLength({min:6}).withMessage('Debe tener como minimo 6 caracteres'),
body('confirmar_password').custom((value,{req})=>{
    if(req.body.password == value){
        return true;
    }else{
        return false;
    }
}).withMessage('Las contraseñas deben ser iguales'),
body('foto').custom((value, {req})=>{
    if(req.file != undefined)   {
        return true;
    }else{
        return false
    }
}).withMessage('Debe seleccionar una foto de perfil'),


];

router.get('/registro', usersMetodos.registrar);
router.post('/registro',upload.single('foto'),validacionesUsuarios, usersMetodos.registrarse);

router.get('/login', usersMetodos.login);

module.exports = router;