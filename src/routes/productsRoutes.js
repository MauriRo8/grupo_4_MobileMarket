const express = require("express");

const router = express.Router();
//const multer = require('multer');

const productsMetodos = require("../controllers/productsControlador");

router.get('/carrito', productsMetodos.carrito);

router.get('/producto', productsMetodos.producto);

router.get('/productos', productsMetodos.productos);

router.get('/create', productsMetodos.create);

router.post('/create', productsMetodos.save);

router.get('/detail/:id', productsMetodos.detail);

router.get('/edit/:id', productsMetodos.editarproducto);

router.put('/edit/:id', productsMetodos.update);

router.get('/delete/:id',productsMetodos.delete);



module.exports = router;