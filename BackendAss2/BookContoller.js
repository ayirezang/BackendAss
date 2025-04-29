const BookModel = require("./BookModel");

const listBookController = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({ data: books });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

const listBookByAuthorController = async (req, res) => {
  try {
    const authName = req.params.author;
    const books = await BookModel.find({ author: authName });
    res.json({ data: books });
  } catch (err) {
    res.status(500).json({ error: "failed to fetch author" });
  }
};

const createBookController = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const book = new BookModel({ title, author, description });
    const savedBook = await book.save();

    res.json({ message: "created successfully", data: savedBook }); // Return savedBook
  } catch (err) {
    console.error("Error saving book: ", err); // Log the error to the console
    res.status(500).json({ error: "Failed to save books" });
  }
};

// //update controller
// const updateBookController = (req, res) => {
//   //update book
//   const { title, author, description } = req.body;

//   const updatedBook = BookModel.update({ title, author, description });
//   res.json({ message: "update successful", data: updatedBook });
// };

// //delete controller
// const deleteBookController = (req, res) => {
//   //delete book

//   const { title } = req.body;
//   const deletedBook = BookModel.delete({ title });
//   res.json({ message: "book deleted", data: deletedBook });
// };

module.exports = {
  createBookController,
  // updateBookController,
  listBookController,
  listBookByAuthorController,
  // deleteBookController,
};
