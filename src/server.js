require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/dbConnect')
const initWebRoutes = require('./routes')

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'PUT', 'DELETE', 'GET']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initWebRoutes(app)
dbConnect()

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log(`SERVER ON THE PORT: ${PORT}`)
})