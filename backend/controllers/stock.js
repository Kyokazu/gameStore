const Stock = require('../models/stock');
const Product = require('../models/product');

const create = async(req, res) => {
    if (!req.body.cantidad || !req.body.codigoProduct || !req.body.bodega)
        return res.status(401).send({ message: 'Process failed: Incomplete data' });
    const product = await Product.findOne({ codigo: req.body.codigoProduct });
    if (!product) return res.status(401).send({ message: 'Product not found' });
    const stock = new Stock({
        cantidad: req.body.cantidad,
        bodega: req.body.bodega,
        idProducto: product.id,
        status: true
    });
    const result = stock.save();
    if (result) return res.status(200).send({ message: 'Stock create', data: stock });
    return res.status(401).send({ message: 'Failed to register stock' });
};

const list = async(req, res) => {
    const stocks = await Stock.find().populate('idProducto');
    if (stocks.length === 0) return res.status(401).send({ message: 'No stock found' });
    return res.status(200).send(stocks);
};
module.exports = { create, list };