const express = require("express");

const router = express.Router();

const mainMetodos = require("../controllers/mainControlador");

router.get('/', mainMetodos.home);


module.exports = router