const express = require("express");

const router = express.Router();

const metodos = require("../controllers/controlador");

router.get('/', metodos.home);

router.get('/registro', metodos.registro);

router.get('/login', metodos.login);

router.get('/carrito', metodos.carrito);

router.get('/producto', metodos.producto);

module.exports = router