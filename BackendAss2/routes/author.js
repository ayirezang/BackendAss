const express = require("express");
const {
  listBookByAuthorController,
  createAuthorController,
  listByAuthorController,
} = require("../controllers/author");
const router = express.Router();

router.get("/book/author/:author", listBookByAuthorController);

router.post("/author", createAuthorController);
router.get("/author", listByAuthorController);
module.exports = router;
