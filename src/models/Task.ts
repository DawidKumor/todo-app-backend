// const mongoose = require("mongoose");
import { Schema, model } from "mongoose";

export interface ITodo {
  createdAt: Date;
  title: string;
  description?: string; // ?-optional
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, required: true, default: false },
});

const Todo = model<ITodo>("Todo", todoSchema);

// module.exports = Todo;
export default Todo;
