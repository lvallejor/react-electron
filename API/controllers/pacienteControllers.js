const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    
    // crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);
    
    //Para que si el codigo da error avance de igual forma
    try {  
        await paciente.save();
         res.json({ mensaje: 'El cliente se agrego correctamente' })

    } catch (error) {
        console.log(error);
        next();
    }

   
}

/** Obtiene todos los pacientes */

exports.obtenerPacientes = async (req, res, next) => {
    try { // Esto lo hacemos por si trayendo la informacion de la BD hay un error nos lo imprima y nos diga cual es y next para que se vaya a la siguiente funcion
        const pacientes = await Paciente.find({}); //aqui usamos .find de mongo para traer todos los registros de la BD
        res.json(pacientes); // ya que nos los trajimos ahora le decimos que los lea en formato json
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene un paciente en especifico por su ID */

exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id); //Este es el metodo de mongo para buscar el id
        res.json(paciente); // si existe lo solicitado lo pasa en formato json
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualiza un registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        })
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Eliminar paciente por su ID
exports.eliminarPaciente = async (req, rest, next) => {

    try {        
        await Paciente.findOneAndDelete({ _id: req.params.id }),
        res.json({ mensaje: 'Eliminado' })
    } catch (error) {
        console.log(error);
        next();
    }
}

