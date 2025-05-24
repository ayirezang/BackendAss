const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book");
const authorRoutes = require("./routes/author");
const userRoutes = require("./routes/user");
const { body } = require("express-validator");
require("dotenv").config();

const bodyParser = require("body-parser");

// Create instance of server
const server = express();

// Middleware
server.use(bodyParser.json());
//routes
server.use(bookRoutes);
server.use(authorRoutes);
server.use(userRoutes);

//start server
mongoose
  .connect(process.env.MONGO_DB)
  .then((result) => {
    server.listen(4000, () => console.log("server is ready"));
  })
  .catch((err) => console.log(err));
// server.listen(4000, () => console.log("server is ready"));
