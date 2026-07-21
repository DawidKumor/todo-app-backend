const express = require("express");
const router = express.Router(); // tworzymy mini-aplikację
const {
  createTodo,
  getTodos,
  deleteTodo,
} = require("../controllers/todoController");

router.post("/", createTodo);
router.get("/", getTodos);
router.delete("/:id", deleteTodo);

module.exports = router;
