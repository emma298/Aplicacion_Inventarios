const express = require('express');
const { getItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/item.controller');
const router = express.Router();

router.get('/all', getItems);
router.get('/:id', getItemById);
router.post('/add', createItem);
router.put('/update/:id', updateItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;
