const Empleados = require('./empleadosController');
module.exports = (router) => {
  router.post('/empleados', Empleados.crearEmpleado);
  router.get('/', Empleados.obtenerEmpleados);
  router.get('/empleados/:id', Empleados.obtenerEmpleado);
  router.get('/empleadosemail/:correo', Empleados.buscarEmail);
  router.put('/empleados/:id', Empleados.actualizarEmpleado);
  router.delete('/empleados/:id', Empleados.eliminarEmpleado);
}