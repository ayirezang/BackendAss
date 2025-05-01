const BookModel = require("./BookModel");
const authorModel = require("./authorModel");

const listBookController = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({ data: books });
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
};

const listBookByAuthorController = async (req, res) => {
  try {
    const authName = req.params.author;
    const books = await BookModel.find({ author: authName });
    res.json({ data: books });
  } catch (err) {
    res.status(500).json({ error: "failed" });
  }
};

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
//vreate author
const createAuthorController = async (req, res) => {
  try {
    const { name, email, country, authorId } = req.body;
    const author = new authorModel({ name, email, country, authorId });
    const savedAuthor = await author.save();
    res.json({ message: "author created", data: savedAuthor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save" });
  }
};
//fetch author
const listByAuthorController = async (req, res) => {
  try {
    const book = await BookModel.find().populate("authorId");
    res.json({ message: "book fetched", data: book });
  } catch (error) {
    res.status(500).json({ error: "Failed" });
  }
};

module.exports = {
  createBookController,
  updateBookController,
  listBookController,
  listBookByAuthorController,
  deleteBookController,
  createAuthorController,
  listByAuthorController,
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const authorSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },

//   authorId: {
//     type: Schema.Types.ObjectId,
//     ref: "Book", //model the id is referring to
//   },
// });
// module.exports = mongoose.model("author", authorSchema);
