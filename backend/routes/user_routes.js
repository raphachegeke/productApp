const express = require("express");
const { message } = require("statuses");

// Import the user model
const User = require("../models/user_model");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const {name, email, password } = req.body

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "Email already Exists"})
        }
        const newUser = new User({ name, email, password});

        await newUser.save();

        res.status(201).json({message: "User succesfully registered"});

    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
})

router.post("/login", async (req, res)=>{
    try {
        const {email, password}= req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        if (user.password !== password) {
            return res.status(401).json({message: "Incorrect password"})
        }

        res.status(200).json({message: `Welcome, ${user.name}!`})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
});

module.exports = router;