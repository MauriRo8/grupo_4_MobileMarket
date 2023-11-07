const express = require('express');
const app = express();
const path = require('path');

//elementos estaticos

app.use(express.static(path.resolve(__dirname, '../public')));

//levantamos el sv
app.listen(8000, () => console.log('Servidor corriendo'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})