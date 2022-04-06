const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
  apellido1: {
    type: String,
    required: true,
    trim: true
  },
  apellido2: {
    type: String,
    required: true,
    trim: true
  },
  nombres: {
    type: String,
    required: true,
    trim: true
  },
  pais: {
    type: String,
    trim: true
  },
  identificacion: {
    type: String,
    trim: true
  },
  documento: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  ingreso: {
    type: String,
    require: true,
  },
  area: {
    type: String,
    trim: true
  },
  estado: {
    type: String,
    trim: true
  },
  registro: {
    type: Date,
    trim: true,
  },
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);