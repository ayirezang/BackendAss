const express = require("express");
//instance server
const server = express();
//bodyParser
const bodyParser = require("body-parser");
//middleware
server.use(bodyParser.json());

//database
let bookDb = [];

//book model
class BookModel {
  constructor({ title, author, description }) {
    this.title = title;
    this.author = author;
    this.description = description;
  }
  save() {
    bookDb.push(this);
  }
  static all() {
    return bookDb;
  }
  static update(updateInfo = {}) {
    let updatedBook = null;
    bookDb = bookDb.map((book) => {
      if (book.title === updateInfo.title) {
        updatedBook = { ...book, ...updateInfo };
        return updatedBook;
      }
      return book;
    });
    return updatedBook;
  }
  static delete({ title }) {
    let deletedBook = null;

    const newBookDb = bookDb.filter((book) => {
      if (book.title !== title) {
        return true;
      }
      deletedBook = book;
      return false;
    });
    bookDb = newBookDb;
    return deletedBook;
  }
}

//controller list
const listBookController = (req, res) => {
  //view store
  const book = BookModel.all();
  res.json({ data: book });
};

////create
const createBookController = (req, res) => {
  //create book
  const { title, author, description } = req.body;
  const book = new BookModel({ title, author, description });
  book.save();
  res.json({ message: "created successfully", data: book });
};

//update controller
const updateBookController = (req, res) => {
  //update book
  const { title, author, description } = req.body;

  const updatedBook = BookModel.update({ title, author, description });
  res.json({ message: "update successful", data: updatedBook });
};

//delete comtroller
const deleteBookController = (req, res) => {
  //delete store

  const { title } = req.body;
  const deletedBook = BookModel.delete({ title });
  res.json({ message: "book deleted", data: deletedBook });
};

//routes
server.get("/book", listBookController);
server.post("/book", createBookController);
server.put("/book", updateBookController);
server.delete("/book", deleteBookController);

//start server
server.listen(4000, () => console.log("server is ready"));
