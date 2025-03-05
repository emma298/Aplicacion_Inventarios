const express = require('express');
const {
    createUbicacion,
    getUbicaciones,
    getUbicacionById,
    updateUbicacionById,
    deleteUbicacionById
} = require('../controllers/ubicacion.controller');
const router = express.Router();

// EndPoint para la creación de una nueva ubicación
router.post('/add', createUbicacion);

// Recuperación de toda la colección de ubicaciones
router.get('/all', getUbicaciones);

// Recuperación de una ubicación por ID
router.get('/byid/:id', getUbicacionById);

// Actualización de una ubicación
router.put('/update/:id', updateUbicacionById);

// Eliminación de una ubicación
router.delete('/del/:id', deleteUbicacionById);

module.exports = router;
