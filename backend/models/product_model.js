// File 2: models/productModel.js

// models/productModel.js

// 1. Import mongoose
const mongoose = require('mongoose');
// 2. Define how our product looks like
const productSchema = new mongoose.Schema({
  name: String,     // name of the product
  price: Number,     // price of the product
  
});
// 3. Create a Product model based on the schema
const Product = mongoose.model('Product', productSchema);
// 4. Export the model so we can use it elsewhere
module.exports = Product;
