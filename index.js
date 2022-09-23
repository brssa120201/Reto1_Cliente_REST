const express = require('express');
const mongoose = require('mongoose');
const user_route = require("./src/routes/person.routes")
const app = express()

require("dotenv").config();
const port = 3000 || process.env.PORT;

app.listen(port, ()=> console.log("Port: ", port));

mongoose
    .connect(process.env.DATABASE_CONNECTION)
    .then(()=> console.log("Connect to mongoDB"))
    .catch((err)=> console.log(err));

app.use(express.json());

//http://localhost:3000/home
app.get('/home', (req, res)=> res.send("Hello world"))

//http://localhost:3000/api/v1/people
app.use("/api/v1/people", user_route);
