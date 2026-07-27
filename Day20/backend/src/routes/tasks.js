const express = require("express");
const router = express.Router();

const {
    createTask,
    getTaskById,
    deleteTask,
    updateTask,
} = require("../controllers/taskController");

const prisma = require("../db");

// GET ALL TASKS
router.get("/", async (req, res) => {

    try {

        console.log("GET /api/tasks request received");

    const tasks = await prisma.task.findMany({
  include: {
    user: true
  }
});

        console.log("Fetched", tasks.length, "tasks from database");

        res.status(200).json(tasks);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to fetch tasks",
        });

    }
});

// CREATE TASK
router.post("/", createTask);

// GET TASK BY ID
router.get("/:id", getTaskById);

// DELETE TASK
router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

module.exports = router;