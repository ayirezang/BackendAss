const BookModel = require("../models/Book");
const authorModel = require("../models/author");

// create controller

const createBookController = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const book = new BookModel({ title, author, description });
    const savedBook = await book.save();

    res.json({ message: "created successfully", data: savedBook });
  } catch (err) {
    console.error("Error ", err);
    res.status(500).json({ error: "Failed to save" });
  }
};

//list controller

const listBookController = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({ data: books });
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
};

// //update controller
const updateBookController = async (req, res) => {
  try {
    const { id, title, author, description } = req.body;

    const book = await BookModel.findById(id);

    if (book) {
      book.title = title;
      book.author = author;
      book.description = description;

      const updatedBook = await book.save();
      res.status(200).json({
        message: "update successful",
        data: updatedBook,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error " });
  }
};
//
// //delete controller
const deleteBookController = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedBook = await BookModel.findByIdAndDelete(id);
    if (deletedBook) {
      return res.json({ message: "book deleted", data: deletedBook });
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error", error: error.message });
  }
};
module.exports = {
  createBookController,
  updateBookController,
  listBookController,
  deleteBookController,
};
