const express = require("express");
const router = express.Router(); // tworzymy mini-aplikację
const { createTodo, getTodos } = require("../controllers/todoController");

router.post("/", createTodo);
router.get("/", getTodos);

module.exports = router;
