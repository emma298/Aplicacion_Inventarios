const Inventario = require('../models/inventario.model');

// Función para recuperar toda la colección de inventarios
const getInventarios = async (req, res) => {
    try {
        const inventarios = await Inventario.find({});
        res.status(200).json(inventarios);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para recuperar un inventario usando su identificador
const getInventarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const inventario = await Inventario.findById(id);
        if (!inventario) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }
        res.status(200).json(inventario);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para crear un inventario
const createInventario = async (req, res) => {
    try {
        const inventario = new Inventario(req.body);
        await inventario.save();
        res.status(201).json(inventario);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para actualizar un inventario por ID
const updateInventarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedInventario = await Inventario.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedInventario) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }
        res.status(200).json(updatedInventario);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para eliminar un inventario por ID
const deleteInventarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInventario = await Inventario.findByIdAndDelete(id);
        if (!deletedInventario) {
            return res.status(404).json({ message: 'Inventario no encontrado' });
        }
        res.status(200).json({ message: 'Inventario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

module.exports = {
    createInventario,
    getInventarios,
    getInventarioById,
    updateInventarioById,
    deleteInventarioById
}
