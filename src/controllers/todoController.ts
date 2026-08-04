import { type Request, type Response } from "express";
import Todo from "../models/Task.js";
async function createTodo(req: Request, res: Response) {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json({ message: "New task added" });
  } catch (err) {
    // res.status(400).json({ message: err.message });
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(400).json({ message });
  }
}

async function getTodos(req: Request, res: Response) {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(400).json({ message });
  }
}

async function deleteTodo(req: Request, res: Response) {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ message: `${result._id} deleted` });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(400).json({ message });
  }
}

async function updateTodo(req: Request, res: Response) {
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!result) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ message: `${result._id} updated` });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(400).json({ message });
  }
}

export { createTodo, getTodos, deleteTodo, updateTodo };
