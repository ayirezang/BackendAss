const express = require("express");
const {
  listBookByAuthorController,
  createAuthorController,
  listBooksWithAuthorController,
} = require("../controllers/author");
const router = express.Router();

router.get("/book/author/:author", listBookByAuthorController);

router.post("/author", createAuthorController);
router.get("/author", listBooksWithAuthorController);
module.exports = router;
