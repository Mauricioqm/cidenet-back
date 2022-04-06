const Empleados = require("./empleadosModel");

exports.crearEmpleado = async (req, res) => {
  try {
    let empleado;
    // Creación del empleado
    empleado = new Empleados(req.body);
    await empleado.save();
    res.send(empleado);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleados.find();
    res.json(empleados)
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.actualizarEmpleado = async (req, res) => {
  try {
    const { apellido1, apellido2, nombres, pais, identificacion, documento, email, ingreso, area, estado, registro } = req.body;
    let empleado = await Empleados.findById(req.params.id);

    if (!empleado) {
      res.status(404).json({ msg: 'El empleado no existe' })
    }

    empleado.apellido1 = apellido1;
    empleado.apellido2 = apellido2;
    empleado.nombres = nombres;
    empleado.pais = pais;
    empleado.identificacion = identificacion;
    empleado.documento = documento;
    empleado.email = email;
    empleado.ingreso = ingreso;
    empleado.area = area;
    empleado.estado = estado;
    empleado.registro = registro;

    empleado = await Empleados.findOneAndUpdate({ _id: req.params.id }, empleado, { new: true });
    res.json(empleado);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.obtenerEmpleado = async (req, res) => {
  try {
    let empleado = await Empleados.findById(req.params.id);

    if (!empleado) {
      res.status(404).json({ msg: 'No existe el empleado' });
    }

    res.json(empleado)

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.eliminarEmpleado = async (req, res) => {
  try {
    let empleado = await Empleados.findById(req.params.id);

    if (!empleado) {
      res.status(404).json({ msg: 'No existe el empleado' });
    }

    await Empleados.findOneAndRemove({ _id: req.params.id })
    res.json({ msg: 'Empleado eliminado exitosamente' });

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.buscarEmail = async (req, res) => {

  try{
    const email = await Empleados.findOne({
      email: req.params.correo
    });
    if (email) {
      res.status(404).json({ msg: 'false' });
      console.log('resultado ', email);
    } else {
      res.json('true');
      console.log('resultado ', email);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}
