const ShoeModel = require("./ShoeModel");
const maleModel = require("./maleModel");
//  const shoeModel = require("./ShoeModel");

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
    console.error(error, "Error saving shoe "); // Log the error to the console
    res.status(500).json({ error: "Failed to save shoes" });
  }
};
//Retrieve all the stored shoefrom the databas

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

//update controller

const updateShoeController = async (req, res) => {
  try {
    const { id, type, size, brand, men } = req.body;
    const shoe = await ShoeModel.findById(id);
    if (shoe) {
      shoe.type = type;
      shoe.size = size;
      shoe.brand = brand;
      shoe.men = men;

      const updatedShoe = await shoe.save();
      res.status(200).json({
        message: "update successful",
        data: updatedShoe,
      });
    } else {
      res.status(404).json({ error: "Shoe not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error " });
  }
};
//delete comtroller
const deleteShoeController = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedShoe = await ShoeModel.findByIdAndDelete(id);
    if (deletedShoe) {
      return res.json({ message: "shoe deleted", data: deletedShoe });
    } else {
      return res.status(404).json({ message: "Shoe not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
  //delete store
};
const createMaleShoeController = async (req, res) => {
  try {
    const { brand, category, size, maleId } = req.body;
    const male = new maleModel({ brand, category, size, maleId });
    const savedMale = await male.save();
    res.json({ message: "created successfully", data: savedMale });
  } catch (error) {
    console.error(error, "Error saving   male shoes "); // Log the error to the console
    res.status(500).json({ error: "Failed to male shoes" });
  }
};
//fetch male shoes
const listMaleShoeController = async (req, res) => {
  try {
    const shoe = await ShoeModel.find().populate("shoeId");
    res.json({ message: "male shoe fetched", data: shoe });
  } catch (error) {
    res.status(500).json({ error: "Failed" });
  }
};

module.exports = {
  createShoeController,

  updateShoeController,
  listShoeController,
  listMenShoeController,
  deleteShoeController,
  createMaleShoeController,
  listMaleShoeController,
};
