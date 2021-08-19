const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    codigo: String,
    description: String,
    date: { type: Date, default: Date.now },
    status: Boolean,
});

const user = mongoose.model('product', productSchema);
module.exports = user;