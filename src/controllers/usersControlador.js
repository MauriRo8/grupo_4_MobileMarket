const path = require("path");
const fs = require ('fs');
const bcrypt = require('bcryptjs');


const{validationResult} = require ('express-validator')

const usersMetodos = {
    registrar: (req, res) => { res.render(path.resolve(__dirname,"../views/users/registro")) },
     
    registrarse: (req,res) => {
        let usuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));
        const errors = validationResult(req);
        
        if(errors.isEmpty()){

            let usuario = {
                nombre : req.body.nombre,
                apellido : req.body.apellido,
                email : req.body.email,
                password : bcrypt.hashSync (req.body.password, 10),
                categoria: req.body.categoria,
                foto: req.file.filename
            
            }

            usuarios.push(usuario);
            let nuevoUsuario = JSON.stringify(usuarios,null,2);
            fs.writeFileSync(path.resolve(__dirname,'../database/usuarios.json'),nuevoUsuario);
            res.redirect('/login');

        }else{ 
            return res.render(path.resolve(__dirname,'../views/users/registro.ejs'),{errors:errors.errors,old:req.body})
            // res.render(path.resolve(__dirname.toString(), '../views/users/registro.ejs'), { errors: errors.errors, old: req.body });
        }
       
    },

   



    login: (req, res) => { res.render("../views/users/login") },
}

module.exports = usersMetodos;