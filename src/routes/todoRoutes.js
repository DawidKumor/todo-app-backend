const express = require("express");
const router = express.Router(); // tworzymy mini-aplikację
const {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

router.post("/", createTodo);
router.get("/", getTodos);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

module.exports = router;
