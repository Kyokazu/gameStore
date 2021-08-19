const mongoose = require('mongoose');

const stockShema = new mongoose.Schema({
    idProducto: { type: mongoose.Schema.ObjectId, ref: 'product' },
    cantidad: String,
    bodega: String,
    date: { type: Date, default: Date.now },
    status: Boolean,
});

const stock = mongoose.model('stock', stockShema);
module.exports = stock;