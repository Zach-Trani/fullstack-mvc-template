//todo - Declare Variables
const express = require("express");
const app = express(); // easier way to reference
const PORT = 9000;
const mongoose = require("mongoose"); // helps talk to the DB easier

//*Import functions/routes
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")

// tells dotenv where the .env is located
require('dotenv').config({path: './config/.env'})

//todo - Connect to Database
connectDB()

//todo - Set Middleware
app.set("view engine", "ejs"); // ejs is a templating engine - dynamically fetch DB info
app.use(express.static('public')) // tells express to look in public folder for static files (css)
app.use(express.urlencoded({ extended: true })); //Required to properly parse form POST requests - sending data

//todo - Set Routes
app.use('/', homeRoutes) // if route starts with '/' go to home route

//todo - Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // listening at port for changes from DB side or user input