// need some structure as to what gets put in the DB - mongoose adds this structure by using a schema
const mongoose = require('mongoose');

// the schema is like a blue print: this object will have this data type etc.
const itemListSchema = new mongoose.Schema({
    // here we are verifying that we are writing the correct data types to the database
    textinput: {
        type: String,
        required: true
    },
    numinput: {
        type: Number,
        required: true
    },
    // not a field in our form, but we are able to grab date. 
    // could also set default to an arbitrary number to fit an input if not data is entered.

    date: {
        type: Date,
        default: Date.now
    }
})

// export schema to use elsewhere in the app - packages up the blueprint: model name, our schema, our collection (which is created in the DB)
module.exports = mongoose.model('itemlist', itemListSchema, 'items');