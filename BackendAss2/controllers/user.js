const express = require("express");
const userModel = require("../models/user");
const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    //validation checks
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.json({ message: error.array()[0].msg });
    }
    //getting data from req body
    const { Username, email, password } = req.body;
    //check if the user email exists
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    //check if the username already exists
    const existingUsername = await userModel.findOne({ Username });
    if (existingUsername) {
      return res.status(400).json({ message: "username  already exists" });
    }
    //hashing password
    bcrypt.hash(password, 10).then((hashPassword) => {
      //creating a new user
      const newUser = new userModel({
        Username: Username,
        email,
        password: hashPassword,
      });
      //saving user to the database
      newUser
        .save()
        .then((user) => {
          res.status(201).json({ message: "user created successfully", user });
        })
        .catch((err) => {
          res
            .status(500)
            .json({ message: "error creating user", error: err.message });
        });
    });
  } catch (error) {
    console.error("error creating user:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
// signin
const signIn = async (req, res) => {
  //getting data from req body
  const { email, password } = req.body;
  try {
    //checking if the user is in the database
    const user = await userModel.findOne({ email });
    if (!user) return res.json({ message: "user not found" });
    //comparing the password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    //return user data on successful signin
    return res.status(200).json({ message: "login successful", user });
  } catch (error) {
    console.error("error signing in:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = {
  signUp,
  signIn,
};
