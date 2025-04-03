const express = require("express");
const server = express();
const bodyParser = require("body-parser");

//middleware
server.use(bodyParser.json());
//database
let storeDb = [];

//store model
class storeModel {
  constructor({ men, ladies, kids }) {
    this.men = men;
    this.ladies = ladies;
    this.kids = kids;
  }
  save() {
    storeDb.push(this);
  }
  static all() {
    return storeDb;
  }
  static update(updateInfo = {}) {
    let updatedStore = null;
    storeDb = storeDb.map((store) => {
      if (store.men === updateInfo.men) {
        updatedStore = { ...store, ...updateInfo };
        return updatedStore;
      }
      return store;
    });
    return updatedStore;
  }
  static delete({ men }) {
    let deletedStore = null;

    const newStoreDb = storeDb.filter((store) => {
      if (store.men !== men) {
        return true;
      }
      deletedStore = store;
      return false;
    });
    storeDb = newStoreDb;
    return deletedStore;
  }
}

//controllers list
const listStoreController = (req, res) => {
  //view store
  const store = storeModel.all();
  res.json({ data: store });
};
//create
const createStoreController = (req, res) => {
  //create store
  const { men, ladies, kids } = req.body;
  const store = new storeModel({ men, ladies, kids });
  store.save();
  res.json({ message: "created successfully", data: store });
};

//update controller
const updateStoreController = (req, res) => {
  //update store
  const { men, ladies, kids } = req.body;

  const updatedStore = storeModel.update({ men, ladies, kids });
  res.json({ message: "update successful", data: updatedStore });
};
//delete comtroller
const deleteStoreController = (req, res) => {
  //delete store

  const { men } = req.body;
  const deletedStore = storeModel.delete({ men });
  res.json({ message: "store deleted", data: deletedStore });
};

//routes
server.get("/store", listStoreController);
server.post("/store", createStoreController);
server.put("/store", updateStoreController);
server.delete("/store", deleteStoreController);

//start server
server.listen(3000, () => console.log("server is ready"));
