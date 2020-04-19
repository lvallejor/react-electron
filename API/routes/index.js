const express = require('express'); // importamos express
const router = express.Router(); // para que todos los metodos de routing esten dentro de la variable router
const pacienteController = require('../controllers/pacienteControllers'); // importamos el controllers

module.exports = function () { // esto para exportarlo desde el archivo principal
    
    // Agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );


    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    // Obtiene un paciente en especifico en la BD
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    )
 
    // Actualizar un registro con un ID especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    
// Elimina un paciente por su ID
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router; 
}

