//shoe model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shoeSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  men: {
    type: String,
    required: true,
  },
  shoeId: {
    type: Schema.Types.ObjectId,
    ref: "male", //model the id is referring to
  },
});
module.exports = mongoose.model("shoe", shoeSchema);

// const shoeSchema = new mongoose.Schema({
//   type: String,
//   size: String,
//   color: String,
//   brand: String,
//   men: String,
// });
// module.exports = mongoose.model("Shoe", shoeSchema);

// class storeModel {
//   constructor({ men, ladies, kids }) {
//     this.men = men;
//     this.ladies = ladies;
//     this.kids = kids;
//   }
//   save() {
//     storeDb.push(this);
//   }
//   static all() {
//     return storeDb;
//   }
//   static update(updateInfo = {}) {
//     let updatedStore = null;
//     storeDb = storeDb.map((store) => {
//       if (store.men === updateInfo.men) {
//         updatedStore = { ...store, ...updateInfo };
//         return updatedStore;
//       }
//       return store;
//     });
//     return updatedStore;
//   }
//   static delete({ men }) {
//     let deletedStore = null;

//     const newStoreDb = storeDb.filter((store) => {
//       if (store.men !== men) {
//         return true;
//       }
//       deletedStore = store;
//       return false;
//     });
//     storeDb = newStoreDb;
//     return deletedStore;
//   }
// }
