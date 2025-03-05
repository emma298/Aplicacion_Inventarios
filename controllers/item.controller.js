const Item = require('../models/item.model');

// Obtener todos los artículos
const getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('ubicacion');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener artículos: ' + error.message });
    }
};

// Obtener artículo por ID
const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('ubicacion');
        if (!item) {
            return res.status(404).json({ message: 'Artículo no encontrado' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el artículo: ' + error.message });
    }
};

// Crear un nuevo artículo
const createItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el artículo: ' + error.message });
    }
};

// Actualizar artículo
const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Artículo no encontrado' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el artículo: ' + error.message });
    }
};

// Eliminar artículo
const deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Artículo no encontrado' });
        }
        res.status(200).json({ message: 'Artículo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el artículo: ' + error.message });
    }
};

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
