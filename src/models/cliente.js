const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    tipo: { type: String, required: true },
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });

module.exports = model('Client', clientSchema);