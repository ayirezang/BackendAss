const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  authorId: {
    type: Schema.Types.ObjectId,
    ref: "Book", //model the id is referring to
  },
});
module.exports = mongoose.model("author", authorSchema);
