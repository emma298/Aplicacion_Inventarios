const express = require('express');
const {
    createAsignacion,
    getAsignaciones,
    getAsignacionById,
    updateAsignacionById,
    deleteAsignacionById
} = require('../controllers/asignacion.controller');
const router = express.Router();

// EndPoint para la creación de una nueva asignación
router.post('/add', createAsignacion);

// Recuperación de toda la colección de asignaciones
router.get('/all', getAsignaciones);

// Recuperación de una asignación por ID
router.get('/byid/:id', getAsignacionById);

// Actualización de una asignación
router.put('/update/:id', updateAsignacionById);

// Eliminación de una asignación
router.delete('/del/:id', deleteAsignacionById);

module.exports = router;
