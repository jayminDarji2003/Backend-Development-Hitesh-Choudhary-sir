// using a common js importing express
const express = require("express")

// IMPORTING DOTENV FILE
require("dotenv").config()

// using a module js importing express
// import express from "express"

const app = express()
// const port = 4000

app.get("/", (req, res) => {
    res.send("<h1>Hello JAYMIN DARJI, Welcome to home page.</h1>")
})

app.get("/twitter", (req, res) => {
    res.send("<h1>Welcome to twitter</h1>")
})

app.get("/insta", (req, res) => {
    res.send("<h1>Welcome to Instagram</h1>")
})

app.get("/fb", (req, res) => {
    res.send("<h1>Welcome to Facebook</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Your app running on ${process.env.PORT}.`);
})