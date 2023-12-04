const { successResponse, errorResponse } = require("../helpers/successAndError");
const { Product } = require("../models/productModel");

// Retrieve all products
module.exports.retrieveAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(successResponse(200, "Successfully retrieved all products from the database", products));
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
};

// Retrieve a product by ID
module.exports.retrieveProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json(errorResponse(404, "Product not found"));
        }

        res.status(200).json(successResponse(200, "Successfully retrieved product by id from the database", product));
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
}

// Add a new product
module.exports.addNewProduct = async (req, res) => {
    try {
        const { title, thumbnail_pic_url, pic_urls, price, desc, texture, weight, size } = req.body;
        const newProduct = new Product({ title, thumbnail_pic_url, pic_urls, price, desc, texture, weight, size });

        await newProduct.save();

        res.status(201).json(successResponse(201, `Product '${title}' has been added successfully with _Id-${newProduct._id}`, newProduct));
    } catch (error) {
        res.status(400).json(errorResponse(400, error.message));
    }
}

// Update a product by ID
module.exports.updateProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).json(errorResponse(404, "Product not found"));
        }

        res.status(200).json(successResponse(200, "Successfully updated product by id", updatedProduct));
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
}

// Delete a product by ID
module.exports.deleteProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json(errorResponse(404, "Product not found"));
        }

        res.status(204).json();
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
}
