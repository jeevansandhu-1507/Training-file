const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const tasks = [
  {
    id: 1,
    title: "Learn React"
  },
  {
    id: 2,
    title: "Build API"
  }
];

app.get("/api/tasks", (req, res) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.json(tasks);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});