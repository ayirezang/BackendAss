const express = require("express");
const { body } = require("express-validator");
const {
  createBookController,
  listBookController,
  listBookSingleById,
  updateBookController,
  deleteBookController,
} = require("../controllers/book");

const router = express.Router();

router.post(
  "/book",
  [
    body("title")
      .notEmpty()
      .trim()
      .withMessage("Title required")
      .isLength({ min: 3, max: 15 }), //author
    body("author")
      .notEmpty()
      .trim()
      .withMessage("author's name required")
      .isLength({ min: 3, max: 10 }), //description
    body("description")
      .notEmpty()
      .trim()
      .withMessage("description required")
      .isLength({ min: 5, max: 20 }),
  ],
  createBookController
);
router.get("/book", listBookController);
router.get("/book/:id", listBookSingleById);
router.put("/book", updateBookController);
router.delete("/book/:id", deleteBookController);

module.exports = router;
