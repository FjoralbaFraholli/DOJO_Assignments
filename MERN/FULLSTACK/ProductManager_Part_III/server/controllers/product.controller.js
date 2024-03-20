const Product = require('../models/product.model');
 
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json({ products: allDaProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json({ product: oneProduct })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: 'Something went wrong', error: err })
        });}
