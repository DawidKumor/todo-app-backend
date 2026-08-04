//const express = require("express");
import express from "express";
const router = express.Router(); // tworzymy mini-aplikację
import {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} from "../controllers/todoController.js";

router.post("/", createTodo);
router.get("/", getTodos);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

export default router;
