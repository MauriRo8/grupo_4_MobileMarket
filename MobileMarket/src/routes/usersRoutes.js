const express = require("express");

const router = express.Router();

const usersMetodos = require("../controllers/usersControlador");

router.get('/registro', usersMetodos.registro);

router.get('/login', usersMetodos.login);

module.exports = router;