//import mongoose
// import mongoose from "mongoose";     // Mongoose to connect to MongoDB
const mongoose = require('mongoose');  // Mongoose to interact with MongoDB


// create a schema 
const productSchema = new mongoose.Schema({
    name: String,   // product's name
    price: Number,  // product's price
});

//create a product model based on schema
const Product = mongoose.model("Product", productSchema);

//export the model
module.exports = Product