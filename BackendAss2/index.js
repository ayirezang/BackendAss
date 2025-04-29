const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Import controllers from BookController.js
const {
  createBookController,
  listBookController,
  listBookByAuthorController,
} = require("./BookContoller");

// Create instance of server
const server = express();

// Middleware
server.use(bodyParser.json());

// Routes
server.post("/book", createBookController);
server.get("/book", listBookController);
server.get("/book/author/:author", listBookByAuthorController);

// server.put("/book", updateBookController);
// server.delete("/book", deleteBookController);

//start server
mongoose
  .connect(
    "mongodb+srv://BookUser:amour@cluster0.9opkdne.mongodb.net/BookUser?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    server.listen(4000, () => console.log("server is ready"));
  })
  .catch((err) => console.log(err));
// server.listen(4000, () => console.log("server is ready"));
