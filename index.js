const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const morgan = require("morgan")
const helmet = require("helmet")

const app = express()

// access to env file
dotenv.config()

// add middleware
app.use(express.json())
app.use(morgan("common"))
app.use(helmet())

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB is connected")
}).catch((error) => {
    console.log(error)
})

app.listen(8000, () => {
    console.log("App is running on PORT " + 8000)
})