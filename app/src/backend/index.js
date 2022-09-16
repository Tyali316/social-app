const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const connect = async () => {
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB!")
 } catch (error) {
   throw error;
 }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB is disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB is connected!")
})

app.get("/", (req,res) => {
  res.send("first request worked!")
})

app.listen(8800, () => {
    connect()
    console.log("Backend is connected!")
});