const Todo = require("../models/Task");
async function createTodo(req, res) {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json({ message: "New task added" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getTodos(req, res) {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteTodo(req, res) {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ message: `${result._id} deleted` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updateTodo(req, res) {
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!result) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ message: `${result._id} updated` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { createTodo, getTodos, deleteTodo, updateTodo };
