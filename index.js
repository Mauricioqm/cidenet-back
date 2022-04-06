'use strict'
const cors = require('cors');
const express = require('express');
const router = express.Router();
const empleadosRoutes = require('./empleados/empleadosRoutes');
const propierties = require('./config/properties');
const DB = require('./config/db');

// Conectamos DB
DB();

// Creación del servidor
const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', router);
empleadosRoutes(router);

// Definicion de ruta principal
app.get('/', (req, res) => {
  res.send('Hi')
})

// app.listen(3000, () => {
//   console.log('Servidor iniciado');
// })
app.listen(propierties.PORT, () => console.log('Servidor corriendo en puerto 3000'));