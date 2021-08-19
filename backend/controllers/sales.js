const Sales = require('../models/sales');
const Product = require('../models/product');
const User = require('../models/user');

const create = async(req, res) => {
    if (!req.body.codigoProduct || !req.body.emailUser || !req.body.precio)
        return res.status(401).send({ message: 'Process failed: Incomplete data' });
    const product = await Product.findOne({ codigo: req.body.codigoProduct });
    const user = await User.findOne({ email: req.body.emailUser });
    if (!product) return res.status(401).send({ message: 'Product not found' });
    if (!user) return res.status(401).send({ message: 'User not found' });
    const sales = new Sales({
        idProducto: product.id,
        idUsuario: user.id,
        precio: req.body.precio,
        status: true
    });
    const result = sales.save();
    if (result) return res.status(200).send({ message: 'Sales create', data: sales });
    return res.status(401).send({ message: 'Failed to register Sales' });
};

const list = async(req, res) => {
    const sales = await Sales.find().populate('idProducto').populate('idUsuario');
    if (sales.length === 0) return res.status(401).send({ message: 'No sales found' });
    return res.status(200).send(sales);
};
module.exports = { create, list };