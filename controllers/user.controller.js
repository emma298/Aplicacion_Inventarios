const User = require('../models/user.model');

// Función para recuperar toda la colección de usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para recuperar un usuario usando su identificador
const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para recuperar un usuario usando su Nickname
const getUsersByNickPass = async (req, res) => {
    try {
        const { nickname } = req.params;
        const user = await User.findById('nickname', nickname);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para crear un usuario
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para actualizar un usuario por ID
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

// Función para eliminar un usuario por ID
const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error: ' + error.message });
    }
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUserById,
    deleteUserById,
    getUsersByNickPass
}
