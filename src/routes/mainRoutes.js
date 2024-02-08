const express = require("express");


const router = express.Router();
const path = require('path');
const multer = require ('multer');


const mainMetodos = require(path.resolve(__dirname,"../controllers/mainControlador"));





router.get('/', mainMetodos.home);


module.exports = router