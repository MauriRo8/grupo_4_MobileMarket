const express = require('express');
const app = express();
const path = require('path');

const routes = require("./routes/routes");
//elementos estaticos

app.use(express.static(path.resolve(__dirname, '../public')));

//levantamos el sv
app.listen(8000, () => console.log('Servidor corriendo'));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", routes);
