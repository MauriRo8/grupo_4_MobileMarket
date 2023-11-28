const path = require("path");

const productsMetodos = { 
    carrito:(req,res) => {res.render("../views/products/carrito")},
    producto:(req,res) =>{res.render("../views/products/producto")},
    nuevoproducto:(req,res) =>{res.render('../views/products/nuevoproducto.ejs')},
    editarproducto:(req,res) =>{res.render('../views/products/editarproducto.ejs')},
};

module.exports = productsMetodos;