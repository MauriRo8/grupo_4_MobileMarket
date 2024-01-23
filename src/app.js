const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require('./routes/productsRoutes')
const methodOverride = require('method-override');
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
//elementos estaticos

app.use(express.static(path.resolve(__dirname, '../public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", mainRoutes);
app.use('/', productsRoutes);
app.use('/', usersRoutes)




//levantamos el sv
app.listen(8000, () => console.log('Servidor corriendo en puerto 8000'));