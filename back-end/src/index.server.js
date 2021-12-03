const express = require("express");
// import express from "express";
const env = require("dotenv");
const app = express();

// Environment variables
env.config();

app.get("/", (req, res, next) => {
  res.status(200).json({
    Message: "Hello from Server",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Started at http://localhost/${process.env.PORT}`);
});
