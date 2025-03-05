const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    puesto: { type: String, required: true },
    mediosContacto: [{
        tipo: { type: String, enum: ['Email', 'Teléfono', 'Otro'], required: true },
        valor: { type: String, required: true }
    }],
    fechaActualizacion: { type: Date, default: Date.now }
});

const Persona = mongoose.model('Persona', PersonaSchema);
module.exports = Persona;
