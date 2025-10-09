// Step 1: Create models/user_model.js
// ==============================
// File: models/user_model.js
// ==============================

// 1️⃣ Import mongoose (helps us talk to MongoDB)
const mongoose = require("mongoose");

// 2️⃣ Define how a User looks in the database
const userSchema = new mongoose.Schema({
  name: String,        // user’s name
  email: String,       // user’s email address
  password: String,    // user’s password (plain for now — we’ll hash later)
});

// 3️⃣ Create a model called “User” based on this schema
const User = mongoose.model("User", userSchema);

// 4️⃣ Export it so we can use it in other files
module.exports = User;