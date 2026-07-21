const express = require("express");
const router = express.Router(); // tworzymy mini-aplikację
const { createTodo } = require("../controllers/todoController");

router.post("/", createTodo);

module.exports = router;
