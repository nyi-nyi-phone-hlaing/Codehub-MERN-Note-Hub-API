//! Packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

//! Locals
const noteRoutes = require("./routes/note");

//! Initializing
const app = express();

//! Middlewares
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(bodyParser.json());

//! Defined Routes
app.use(noteRoutes);

const PORT = process.env.PORT || 8081;

mongoose
  .connect(process.env.MONGODB_URL)
  .then((_) => {
    app.listen(PORT);
    console.log(`Connected to MongoDB & Running on Port ${PORT}`);
  })
  .catch((err) => console.log(err));
