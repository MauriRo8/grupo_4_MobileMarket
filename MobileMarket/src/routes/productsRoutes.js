const express = require("express");

const router = express.Router();

const productsMetodos = require("../controllers/productsControlador");

router.get('/carrito', productsMetodos.carrito);

router.get('/producto', productsMetodos.producto);

router.get('/nuevoproducto', productsMetodos.nuevoproducto);

router.get('/editarproducto', productsMetodos.editarproducto);

//router.post('/editarproducto') para el prox sprint

module.exports = router;