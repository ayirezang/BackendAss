const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {
  createShoeController,
  listShoeController,
  listMenShoeController,
} = require("./shoeController");

//middleware
server.use(bodyParser.json());

//routes
server.post("/shoe", createShoeController);
server.get("/shoe", listShoeController);
server.get("/shoe/men/:men", listMenShoeController);

// server.put("/store", updateStoreController);
// server.delete("/store", deleteStoreController);

//start server
mongoose
  .connect(
    "mongodb+srv://ShoeUser:shoe@cluster0.9opkdne.mongodb.net/ShoeUser?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    server.listen(3000, () => console.log("server is ready"));
  })
  .catch((err) => console.log(err));
