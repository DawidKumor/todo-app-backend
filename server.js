const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json()); // middleware do body
const port = process.env.PORT || 3000;

const path = require("path"); //frontend

app.use(express.static(path.join(__dirname, "public"))); //frontend

const connectDB = require("./src/config/db");
connectDB();

const todoRouter = require("./src/routes/todoRoutes");
app.use("/tasks", todoRouter);

/*app.get("/", (req, res) => {
  res.send("Hello World!");
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
