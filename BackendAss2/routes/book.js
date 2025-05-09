const express = require("express");
const {
  createBookController,
  listBookController,
  updateBookController,
  deleteBookController,
} = require("../controllers/book");
const router = express.Router();

router.post("/book", createBookController);
router.get("/book", listBookController);
router.put("/book", updateBookController);
router.delete("/book", deleteBookController);

module.exports = router;
