const express = require('express');
const {
    createInventario,
    getInventarios,
    getInventarioById,
    updateInventarioById,
    deleteInventarioById
} = require('../controllers/inventario.controller');
const router = express.Router();

// EndPoint para la creación de un nuevo inventario
router.post('/add', createInventario);

// Recuperación de toda la colección de inventarios
router.get('/all', getInventarios);

// Recuperación de un inventario por ID
router.get('/byid/:id', getInventarioById);

// Actualización de un inventario
router.put('/update/:id', updateInventarioById);

// Eliminación de un inventario
router.delete('/del/:id', deleteInventarioById);

module.exports = router;
