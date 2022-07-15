const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// creando al servidor del servidor
const app = express();

//conectamos a la db
conectarDB();
app.use(express.json())
app.use(cors());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000,() => {
    console.log('el servidor este corriendo perfectamente')
});