const ItemList = require('../models/itemlist') // can now reference the schema

// two methods: one to get homepage, and two to create item

// when talking to DB need to use async/await functions
module.exports = {
    getIndex: async (req, res) => {
        console.log("I made it")
        try {
    // go into the DB-->collection and bring out all data into this new variable: items
            res.json({ itemList: await ItemList.find() }); // render the homepage & send the list of items as an object over to ejs to list them out
        } catch (err) {
            if (err) return res.status(500).send(err); // sends the line of the error
        }
    },
    createItem: async (req, res) => {
        // reference schema, and pass item into schema
        const newItem = new ItemList(
            {
                // submitting a form creates a req to the server. input variable located in ejs body
                textinput: req.body.textinput,
                numinput: req.body.numinput
            }
        )
        try {
            await newItem.save(); // save checks if textinput & numinput meet the requirements in the schema
            console.log(newItem)
            res.redirect("/"); // reload the homepage
        } catch(err) {
        if (err) return res.status(500).send(err);
        res.redirect("/");
        }
    }
}