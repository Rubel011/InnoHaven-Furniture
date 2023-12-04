const express=require('express');
const { retrieveAllProducts, retrieveProductById, addNewProduct, updateProductById, deleteProductById } = require('../controllers/productController');
const productRouter=express.Router();

// Retrieve all products
productRouter.get('/products',retrieveAllProducts);

// Retrieve a product by ID
productRouter.get('/products/:id', retrieveProductById);

// Add a new product
productRouter.post('/products', addNewProduct);

// Update a product by ID
productRouter.put('/products/:id', updateProductById);

// Delete a product by ID
productRouter.delete('/products/:id',deleteProductById);

module.exports = productRouter;