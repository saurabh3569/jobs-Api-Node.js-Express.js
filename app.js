require('dotenv').config()
require('colors')
require('express-async-errors')

const express = require('express')
const app = express()

const notFoundMiddeware = require('./middleware/not-found')
const errordMiddeware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productRoute = require('./routes/products')

// middleware
app.use(express.json())

// routes
app.use('/api/v1/products',productRoute)
app.use(notFoundMiddeware)
app.use(errordMiddeware)

const port = process.env.PORT || 5050 

const server = async() => {
    try {
        // connect db
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server started .... at port : ${port}`.yellow);
        })
    } catch (error) {
        console.log(error)
    }
}

server()