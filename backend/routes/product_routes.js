// ================================
// File 3: routes/productRoutes.js
// ================================

// 1️⃣ Import Express (the web framework)
const express = require('express');

// 2️⃣ Create a "router" object
//    Think of this like a mini Express app that only 
// handles specific routes.
//    We'll later connect this to our main app (in server.js)
const router = express.Router();

// 3️⃣ Import our Product model (the "blueprint" for 
// products in MongoDB)
const Product = require('../models/product_model');


// ================================
// 🟢 CREATE a new product
// ================================

// When someone sends a POST request to "/"
// (like http://localhost:5000/api/products)
// this code will run
router.post('/', async (req, res) => {
  try {
    // req.body contains the data the user sent (like name, 
    // price, etc.)
    const product = new Product(req.body);

    // Save the product to our MongoDB database
    const savedProduct = await product.save();

    // Send back the saved product as a response, 
    // with status 201 (Created)
    res.status(201).json(savedProduct);
  } catch (err) {
    // If something goes wrong, send an error message
    res.status(400).json({ message: err.message });
  }
});


// ================================
// 🟣 GET all products
// ================================

// When someone sends a GET request to "/"
// (like http://localhost:5000/api/products)
// this code will run
router.get('/', async (req, res) => {
  try {
    // Find (fetch) all products from MongoDB
    const products = await Product.find();

    // Send them back as JSON data
    res.json(products);
  } catch (err) {
    // If there's an error, send an error message
    res.status(500).json({ message: err.message });
  }
});


// ================================
// 🚀 Export this router
// ================================

// This makes it possible to "import" this file into server.js
// and use all the routes we defined above
module.exports = router;
