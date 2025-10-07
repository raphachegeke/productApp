// Import express
const express = require('express');

// Import router from express
const router = express.Router();

// Import product model from models
const Product = require('../models/productModel');

// POST route to create a new product
router.post('/', async (req, res) => {
    try {
        // Create a new product using the data from the request body
        const product = new Product(req.body);

        // Save the product to the database
        const savedProduct = await product.save();

        // Respond with the saved product
        res.status(201).json(savedProduct);
    } catch (error) {
        // Respond with a 400 error and the error message
        res.status(400).json({ message: error.message });
    }
});

// GET route to retrieve all products
router.get('/', async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find();

        // If no products are found, respond with an empty array
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        // Respond with the list of products
        res.status(200).json(products);
    } catch (error) {
        // Respond with a 500 error if something goes wrong with the database query
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
