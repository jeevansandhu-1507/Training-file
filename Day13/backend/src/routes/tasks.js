const express = require("express");
const router = express.Router();

const prisma = require("../db");

router.get("/", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

module.exports = router;