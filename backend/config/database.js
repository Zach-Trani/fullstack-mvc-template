// will need to require this each time
const mongoose = require('mongoose')

// we want to wait on successful reponse from MongoDB, before sending things to the DB (use async)
const connectDB = async () => {
    // try to connect or catch the error by doing something with it
    try  {
        // await: don't do anything else until we receive this connection
        const conn = await mongoose.connect(process.env.DB_CONNECTION) // need process.env.<variablename> when referencing .env variables
        console.log(`MondoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1) // exit with failure
    }
}
module.exports = connectDB // export some reference - not invoking here