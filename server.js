// Import dependencies
const express = require('express');
const cors = require('cors');
require("dotenv").config()

// Import JSON
const projects = require('./projects.json');
const home = require('./home.json');

// Application object
const app = express();

//Middleware
app.use(cors())

// Routes 
app.get("/", (request, response) => {
    response.send("Server is running")
})

app.get("/projects", (request, response) => {
    response.json(projects)
})

app.get("/home", (request,response) => {
    response.json(home)
})


//Listener
const PORT = process.env.PORT || 5555

app.listen(PORT, (request, response) => {
    console.log(`Running on port: ${PORT}`)
})