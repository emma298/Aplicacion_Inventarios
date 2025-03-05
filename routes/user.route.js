const express = require('express');
const { getUsers, getUsersById, createUser, updateUserById, deleteUserById, getUsersByNickPass } = require('../controllers/user.controller');
const router = express.Router();

// EndPoint para la recuperación de la colección de Usuarios
router.get('/all', getUsers);
// Recuperación de un usuario por ID
router.get('/byid/:id', getUsersById);
//enpoint para la recuperacion de un usuario por nickname
router.get('/byNick/:nickname', getUsersByNickPass);
// Creación de un nuevo usuario
router.post('/add', createUser);
// Actualización de un usuario
router.put('/update/:id', updateUserById);
// Eliminación de un usuario
router.delete('/del/:id', deleteUserById);

module.exports = router;
