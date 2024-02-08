const path = require("path");
const fs = require('fs');
const { log } = require("console");
const { json } = require("express");

const productsMetodos = {
    carrito: (req, res) => { res.render("../views/products/carrito") },

    producto: (req, res) => { res.render("../views/products/producto") },

    productos: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        res.render(path.resolve(__dirname, '../views/products/productos.ejs'), { productos });
    },

    create: (req, res) => { res.render('../views/products/nuevoproducto.ejs') },

    save: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        let ultimoProducto = productos.pop();
        productos.push(ultimoProducto);
        let nuevoProducto = {
            id: ultimoProducto.id + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            precio: req.body.precio,
            descuento: req.body.descuento,
            color: req.body.color,
            memoria: req.body.memoria,
            image:req.file.filename
        };
        productos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(productos, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../database/productos.json'), nuevoProductoGuardar);
        res.redirect('/productos');
    },

    detail: (req, res) => {
        //console.log(req.params);
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        let id = req.params.id;
        let detalleProducto;
        productos.forEach(producto => {
            if (producto.id == id) {
                detalleProducto = producto;
            }
        });
        res.render(path.resolve(__dirname, '../views/products/detail.ejs'), { detalleProducto })
    },

    editarproducto: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        let id = req.params.id;
        let productoEditar = productos.find(producto => {
            return producto.id == id;
        })


        res.render(path.resolve(__dirname, '../views/products/editarproducto.ejs'), { productoEditar })
    },

    update: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        let id = req.params.id;
        req.body.id = id;
        let productoActualizar = productos.map(producto => {
            if (producto.id == id) {
                return producto = req.body;
            }
            return producto;

        })

        let productoActualizado = JSON.stringify(productoActualizar, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../database/productos.json'), productoActualizado);
        res.redirect('/productos');

    },

    delete: (req, res) => {

        productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        let id = req.params.id;

        let productoEliminar = productos.filter(producto => producto.id != id)


        let productoEliminado = JSON.stringify(productoEliminar, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../database/productos.json'), productoEliminado);
        res.redirect('/productos');


    }

}

module.exports = productsMetodos;