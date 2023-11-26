const path = require("path");


const metodos = { 
    home:(req,res) => {res.render("home")},
    registro:(req,res) =>{res.render("../views/users/registro")},
    login:(req,res) =>{res.render("../views/users/login")},
    carrito:(req,res) => {res.render("../views/products/carrito")},
    producto:(req,res) =>{res.render("../views/products/producto")},
    
};

module.exports = metodos;
