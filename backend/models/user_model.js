// import mongose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,  // user's name
    email: String, //user's email
    password: String, // user's password
});


// create a model called user based on the schema
const User = mongoose.model("User", userSchema);

//export it so we can use it in other files
module.exports = User;