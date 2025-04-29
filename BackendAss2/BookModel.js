//book model

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
});
// const Book = mongoose.model("Book", bookSchema);
module.exports = mongoose.model("Book", bookSchema);

// class BookModel {
//   constructor({ title, author, description }) {
//     this.title = title;
//     this.author = author;
//     this.description = description;
//   }
//   save() {
//     bookDb.push(this);
//   }
//   static all() {
//     return bookDb;
//   }
//   static update(updateInfo = {}) {
//     let updatedBook = null;
//     bookDb = bookDb.map((book) => {
//       if (book.title === updateInfo.title) {
//         updatedBook = { ...book, ...updateInfo };
//         return updatedBook;
//       }
//       return book;
//     });
//     return updatedBook;
//   }
//   static delete({ title }) {
//     let deletedBook = null;

//     const newBookDb = bookDb.filter((book) => {
//       if (book.title !== title) {
//         return true;
//       }
//       deletedBook = book;
//       return false;
//     });
//     bookDb = newBookDb;
//     return deletedBook;
//   }
// }
