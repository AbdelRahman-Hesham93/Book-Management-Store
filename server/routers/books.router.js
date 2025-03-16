const router = require("express").Router();
const booksController = require("../controllers/books.controller");
const middleWare = require("../middleware/auth");

router.get("/api/books/", booksController.getAll);
router.get("/api/books/:id", booksController.getOne);
router.post("/api/books/", booksController.add);
router.delete("/api/books/:id", booksController.delete);
router.put("/api/books/:id", booksController.edit);

module.exports = router;
