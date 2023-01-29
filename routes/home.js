//*Handles inital GET request for the homepage
//*Handles POST method request for adding a new item

const express = require('express')
const router = express.Router() // express method 
const homeController = require('../controllers/home')

// getIndex and createItem 
router.get('/', homeController.getIndex) //get method is when we READ data - this route triggers on home page open
router.post('/new', homeController.createItem) //data submitted to a DB or CREATE something new - this route triggers when 'add item' is submitted
module.exports = router