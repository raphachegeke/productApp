// ================================
// File 4: server.js — Main backend file
// ================================

// 1️⃣ Import important packages
const express = require('express');   // Framework to build web servers easily
const mongoose = require('mongoose'); // Helps connect and talk to MongoDB
const cors = require('cors');         // Allows our frontend (React) to talk to backend (Node)
require('dotenv').config();           // Loads secret values from the .env file (like DB password)


// 2️⃣ Create our Express app
const app = express();


// ================================
// 🧩 Middleware — setup code that runs before routes
// ================================

// Middleware means: “functions that handle requests before they reach your routes”

app.use(cors());           // Allows your frontend (React) to make API calls to this backend
app.use(express.json());   // Makes Express automatically read and understand JSON data sent in requests
// Without this, req.body would be undefined!


// ================================
// 🟣 Connect to MongoDB
// ================================

// process.env.MONGO_URI comes from your .env file
// Example inside .env:
// MONGO_URI=mongodb://127.0.0.1:27017/product_app
// PORT=5000

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))  // if connection works
  .catch(err => console.log('❌ MongoDB connection error:', err));  // if it fails


// ================================
// 🟢 Routes — where the app listens for specific URLs
// ================================

// Import the product routes file
// (this is the router we made earlier in routes/productRoutes.js)
const productRoutes = require('./routes/product_routes');

// If someone visits /product_app/products → send them to productRoutes
// e.g. GET http://localhost:5000/product_app/products → get all products
//      POST http://localhost:5000/product_app/products → create a product

app.use('/product_app/products', productRoutes); // register the products routes

// User routes
const userRoutes = require("./routes/user_routes");
app.use("/product_app/users", userRoutes); // user routes


// Example endpoints or urls:

// http://localhost:5000/product_app/users/signup

// http://localhost:5000/product_app/users/login


// =====================
// Launching the server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});

