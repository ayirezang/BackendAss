//male shoe model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maleSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },

  maleId: {
    type: Schema.Types.ObjectId,
    ref: "shoe", //model the id is referring to
  },
});
module.exports = mongoose.model("male", maleSchema);
