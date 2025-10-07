// Import the required modules for the application
const express = require('express');  // Express framework to handle HTTP requests
const mongoose = require('mongoose');  // Mongoose to interact with MongoDB
const cors = require('cors');  // CORS to allow cross-origin requests
require('dotenv').config();  // Load environment variables from .env file

// Create an Express app
const app = express();

// Set up middleware to handle requests
app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse incoming requests with JSON payloads

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MONGODB'))  // Success message when connected to MongoDB
    .catch(err => console.log('MONGODB connection Error:', err))  // Error message if the connection fails

// Import the routes for the product-related endpoints
const productRoutes = require('./routes/productRoute');

// Use the product routes for the '/product_app/products' URL
app.use('/product_app/products', productRoutes);

// Start the server and listen on the port defined in the environment variables
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);  // Log the server's URL to the console
});
