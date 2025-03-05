const express = require('express');
const {
    createPersona,
    getPersonas,
    getPersonaById,
    updatePersonaById,
    deletePersonaById
} = require('../controllers/persona.controller');
const router = express.Router();

// EndPoint para la creación de una nueva persona
router.post('/add', createPersona);

// Recuperación de toda la colección de personas
router.get('/all', getPersonas);

// Recuperación de una persona por ID
router.get('/byid/:id', getPersonaById);

// Actualización de una persona
router.put('/update/:id', updatePersonaById);

// Eliminación de una persona
router.delete('/del/:id', deletePersonaById);

module.exports = router;
