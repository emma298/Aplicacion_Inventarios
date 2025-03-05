const mongoose = require('mongoose');

const InventarioSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    fechasInventario: [{ type: Date, required: true }],
    responsable: { type: String, required: true },
    fechaRegistro: { type: Date, default: Date.now },
    estado: { type: String, enum: ['Activa', 'Inactiva'], required: true }
});

const Inventario = mongoose.model('Inventario', InventarioSchema);
module.exports = Inventario;
