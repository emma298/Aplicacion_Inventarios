const Persona = require('../models/persona.model');

// Función para recuperar toda la colección de personas
const getPersonas = async (req, res) => {
    try {
        const personas = await Persona.find({});
        res.status(200).json(personas);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para recuperar una persona usando su identificador
const getPersonaById = async (req, res) => {
    try {
        const { id } = req.params;
        const persona = await Persona.findById(id);
        if (!persona) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        res.status(200).json(persona);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para crear una persona
const createPersona = async (req, res) => {
    try {
        const persona = new Persona(req.body);
        await persona.save();
        res.status(201).json(persona);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para actualizar una persona por ID
const updatePersonaById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPersona = await Persona.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPersona) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        res.status(200).json(updatedPersona);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para eliminar una persona por ID
const deletePersonaById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPersona = await Persona.findByIdAndDelete(id);
        if (!deletedPersona) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        res.status(200).json({ message: 'Persona eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

module.exports = {
    createPersona,
    getPersonas,
    getPersonaById,
    updatePersonaById,
    deletePersonaById
}
