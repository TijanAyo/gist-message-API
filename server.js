const express = require('express')
const app = express()

require('dotenv').config()

// MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Routes
const messageRoute = require('./routes/messageRoute');

// Using Routes
app.use(messageRoute);



app.listen(process.env.PORT || 8080)