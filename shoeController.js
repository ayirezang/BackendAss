const ShoeModel = require("./ShoeModel");
const shoeModel = require("./ShoeModel");

//controllers list

//Save the shoe into a MongoDB database

const createShoeController = async (req, res) => {
  //create store
  try {
    const { type, size, color, brand, men } = req.body;
    const shoe = new ShoeModel({ type, size, color, brand, men });
    const savedShoe = await shoe.save();
    res.json({ message: "created successfully", data: savedShoe }); // Return savedShoe
  } catch (error) {
    console.error("Error saving shoe ", err); // Log the error to the console
    res.status(500).json({ error: "Failed to save shoes" });
  }
};
//Retrieve all the stored shoefrom the database

const listShoeController = async (req, res) => {
  try {
    const shoes = await ShoeModel.find();
    res.json({ data: shoes });
  } catch (error) {
    res.status(500).json({ error: "failed to fetch shoes" });
  }
};
//retrieve Retrieve one shoe from the database based on a url param (men)

const listMenShoeController = async (req, res) => {
  try {
    const menType = req.params.men;
    const shoe = await ShoeModel.find({ men: menType });
    res.json({ data: shoe });
  } catch (error) {
    res.status(500).json({ error: "failed to fetch men" });
  }
};

// //update controller
// const updateShoeController = (req, res) => {
//   //update store
//   const { men, ladies, kids } = req.body;

//   const updatedStore = storeModel.update({ men, ladies, kids });
//   res.json({ message: "update successful", data: updatedStore });
// };
// //delete comtroller
// const deleteShoeController = (req, res) => {
//   //delete store

//   const { men } = req.body;
//   const deletedStore = storeModel.delete({ men });
//   res.json({ message: "store deleted", data: deletedStore });
// };
module.exports = {
  createShoeController,
  // updateBookController,
  listShoeController,
  listMenShoeController,
};
