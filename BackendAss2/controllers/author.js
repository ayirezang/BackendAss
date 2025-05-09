const authorModel = require("../models/author");
const BookModel = require("../models/Book");

const listBookByAuthorController = async (req, res) => {
  try {
    const authName = req.params.author;
    const books = await BookModel.find({ author: authName });
    res.json({ data: books });
  } catch (err) {
    res.status(500).json({ error: "failed" });
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
  listBookByAuthorController,

  createAuthorController,
  listByAuthorController,
};
