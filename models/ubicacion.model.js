const mongoose = require('mongoose');

const UbicacionSchema = mongoose.Schema({
    edificio: { type: String, required: true },
    area: { type: String, required: true },
    departamento: { type: String, required: true },
    direccion: {
        calle: { type: String, required: true },
        numero: { type: String, required: true },
        ciudad: { type: String, required: true },
        estado: { type: String, required: true },
        codigoPostal: { type: String, required: true }
    },
    fechaActualizacion: { type: Date, default: Date.now }
});

const Ubicacion = mongoose.model('Ubicacion', UbicacionSchema);
module.exports = Ubicacion;
