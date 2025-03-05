const mongoose = require('mongoose');

const AsignacionSchema = mongoose.Schema({
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true },
    articulo: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    observacion: { type: String },
    estado: { type: String, enum: ['Activa', 'Inactiva'], required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date },
    usuarioAsignador: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Asignacion = mongoose.model('Asignacion', AsignacionSchema);
module.exports = Asignacion;
