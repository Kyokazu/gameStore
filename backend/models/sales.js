const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    idProducto: { type: mongoose.Schema.ObjectId, ref: 'product' },
    idUsuario: { type: mongoose.Schema.ObjectId, ref: 'user' },
    precio: Number,
    date: { type: Date, default: Date.now },
    status: Boolean,
});

const sales = mongoose.model('sales', salesSchema);
module.exports = sales;