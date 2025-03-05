const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    tipo: { type: String, enum: ['Mobiliario de oficina', 'Equipo de cómputo', 'Otros'], required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, enum: ['Sin determinar', 'Malo', 'Regular', 'Bueno', 'Excelente'], required: true },
    ubicacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Ubicacion', required: true },
    fechaActualizacion: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
