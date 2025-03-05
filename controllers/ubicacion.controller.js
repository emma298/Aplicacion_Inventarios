const Ubicacion = require('../models/ubicacion.model');

// Función para recuperar toda la colección de ubicaciones
const getUbicaciones = async (req, res) => {
    try {
        const ubicaciones = await Ubicacion.find({});
        res.status(200).json(ubicaciones);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para recuperar una ubicación usando su identificador
const getUbicacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const ubicacion = await Ubicacion.findById(id);
        if (!ubicacion) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }
        res.status(200).json(ubicacion);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para crear una ubicación
const createUbicacion = async (req, res) => {
    try {
        const ubicacion = new Ubicacion(req.body);
        await ubicacion.save();
        res.status(201).json(ubicacion);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para actualizar una ubicación por ID
const updateUbicacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUbicacion = await Ubicacion.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUbicacion) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }
        res.status(200).json(updatedUbicacion);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para eliminar una ubicación por ID
const deleteUbicacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUbicacion = await Ubicacion.findByIdAndDelete(id);
        if (!deletedUbicacion) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }
        res.status(200).json({ message: 'Ubicación eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

module.exports = {
    createUbicacion,
    getUbicaciones,
    getUbicacionById,
    updateUbicacionById,
    deleteUbicacionById
}
