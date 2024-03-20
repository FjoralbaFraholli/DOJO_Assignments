const ProductController = require('../controllers/product.controller');
 
module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/product', ProductController.createNewProduct);
    app.get('/api/product/:id', ProductController.getOneProduct);
}
