const express = require("express");

const router = express.Router();
const multer = require('multer');
const path = require('path')

const productsMetodos = require(path.resolve(__dirname,"../controllers/productsControlador"));

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,path.resolve(__dirname,'../../public/images/productos'))
    },
    filename:(req,file,cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
    cb(null,fileName)
    }

})

const upload = multer({storage})

router.get('/carrito', productsMetodos.carrito);

router.get('/producto', productsMetodos.producto);

router.get('/productos', productsMetodos.productos);

router.get('/create', productsMetodos.create);

router.post('/create',upload.single('image') ,productsMetodos.save);

router.get('/detail/:id', productsMetodos.detail);

router.get('/edit/:id', productsMetodos.editarproducto);

router.put('/edit/:id', productsMetodos.update);

router.get('/delete/:id',productsMetodos.delete);



module.exports = router;