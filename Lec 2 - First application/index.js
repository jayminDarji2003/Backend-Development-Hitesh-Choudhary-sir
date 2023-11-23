// using a common js importing express
const express = require("express")

// IMPORTING DOTENV FILE
require("dotenv").config()

// using a module js importing express
// import express from "express"

const app = express()
// const port = 4000


app.listen(process.env.PORT, () => {
    console.log(`Your app running on ${process.env.PORT}.`);
})


const json_data = {
    "data": [
        { "id": 1, "name": "Alice", "age": 25, "city": "New York" },
        { "id": 2, "name": "Bob", "age": 30, "city": "Los Angeles" },
        { "id": 3, "name": "Charlie", "age": 28, "city": "Chicago" },
        { "id": 4, "name": "David", "age": 22, "city": "Houston" },
        { "id": 5, "name": "Eva", "age": 35, "city": "San Francisco" },
        { "id": 6, "name": "Frank", "age": 27, "city": "Miami" },
        { "id": 7, "name": "Grace", "age": 32, "city": "Seattle" },
        { "id": 8, "name": "Henry", "age": 29, "city": "Denver" },
        { "id": 9, "name": "Ivy", "age": 31, "city": "Boston" },
        { "id": 10, "name": "Jack", "age": 26, "city": "Atlanta" },
        { "id": 11, "name": "Karen", "age": 33, "city": "Dallas" },
        { "id": 12, "name": "Leo", "age": 24, "city": "Phoenix" },
        { "id": 13, "name": "Mia", "age": 28, "city": "Philadelphia" },
        { "id": 14, "name": "Nathan", "age": 34, "city": "Detroit" },
        { "id": 15, "name": "Olivia", "age": 27, "city": "San Diego" },
        { "id": 16, "name": "Peter", "age": 29, "city": "Austin" },
        { "id": 17, "name": "Quinn", "age": 31, "city": "Charlotte" },
        { "id": 18, "name": "Ryan", "age": 26, "city": "San Antonio" },
        { "id": 19, "name": "Samantha", "age": 30, "city": "Portland" },
        { "id": 20, "name": "Tyler", "age": 28, "city": "Minneapolis" }
    ]
}


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

app.get("/json", (req, res) => {
    res.json(json_data)
})