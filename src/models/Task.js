const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, required: true, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
