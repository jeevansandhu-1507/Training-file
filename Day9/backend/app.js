const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all tasks
app.get("/api/tasks", (req, res) => {
  const data = fs.readFileSync("tasks.json");
  const tasks = JSON.parse(data);

  res.json(tasks);
});

// ADD task
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;

  const data = fs.readFileSync("tasks.json");
  const tasks = JSON.parse(data);

  const newTask = {
    id: Date.now(),
    title,
  };

  tasks.push(newTask);

  fs.writeFileSync(
    "tasks.json",
    JSON.stringify(tasks, null, 2)
  );

  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});