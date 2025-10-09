// Step 2: Create routes/user_routes.js
// File: routes/user_routes.js
// ==============================

// 1️⃣ Import express
const express = require("express");

// 2️⃣ Import our User model
const User = require("../models/user_model");

// 3️⃣ Create a router (mini express app)
const router = express.Router();


// 🟢 SIGNUP route
// When a new user wants to register
router.post("/signup", async (req, res) => {
  try {
    // req.body will contain { name, email, password }
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
	
    // Create a new user object
    const newUser = new User({ name, email, password });

    // Save it in MongoDB
    await newUser.save();

    // Respond with success
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});


// 🟣 LOGIN route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if passwords match (simple check for now)
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If all good:
    res.status(200).json({ message: `Welcome, ${user.name}!` });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// 🚀 Export the router
module.exports = router;
