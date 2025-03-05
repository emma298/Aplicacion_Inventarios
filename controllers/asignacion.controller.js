const Asignacion = require('../models/asignacion.model');

// Función para recuperar toda la colección de asignaciones
const getAsignaciones = async (req, res) => {
    try {
        const asignaciones = await Asignacion.find({});
        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para recuperar una asignación usando su identificador
const getAsignacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const asignacion = await Asignacion.findById(id);
        if (!asignacion) {
            return res.status(404).json({ message: 'Asignación no encontrada' });
        }
        res.status(200).json(asignacion);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para crear una asignación
const createAsignacion = async (req, res) => {
    try {
        const asignacion = new Asignacion(req.body);
        await asignacion.save();
        res.status(201).json(asignacion);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para actualizar una asignación por ID
const updateAsignacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAsignacion = await Asignacion.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAsignacion) {
            return res.status(404).json({ message: 'Asignación no encontrada' });
        }
        res.status(200).json(updatedAsignacion);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para eliminar una asignación por ID
const deleteAsignacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAsignacion = await Asignacion.findByIdAndDelete(id);
        if (!deletedAsignacion) {
            return res.status(404).json({ message: 'Asignación no encontrada' });
        }
        res.status(200).json({ message: 'Asignación eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

module.exports = {
    createAsignacion,
    getAsignaciones,
    getAsignacionById,
    updateAsignacionById,
    deleteAsignacionById
}
