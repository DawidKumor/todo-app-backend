import express from "express";
import dotenv from "dotenv";
import path from "path"; //frontend
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import todoRouter from "./routes/todoRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()); // middleware do body

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "public"))); //frontend

connectDB();

app.use("/tasks", todoRouter);

/*app.get("/", (req, res) => {
  res.send("Hello World!");
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
