//store model

const mongoose = require("mongoose");
const shoeSchema = new mongoose.Schema({
  type: String,
  size: String,
  color: String,
  brand: String,
  men: String,
});
module.exports = mongoose.model("Shoe", shoeSchema);

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
