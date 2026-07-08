const prisma = require("../db");

// CREATE TASK
const createTask = async (req, res) => {
    try {
        const { title } = req.body;

        const task = await prisma.task.create({
            data: {
                title,
            },
        });

        res.status(201).json(task);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message,
        });
    }
};

// GET TASK BY ID
const getTaskById = async (req, res) => {

    try {

        const id = Number(req.params.id);

        const task = await prisma.task.findUnique({
            where: {
                id: id,
            },
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        res.status(200).json(task);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE TASK
const deleteTask = async (req, res) => {

    try {

        const id = Number(req.params.id);

        await prisma.task.delete({
            where: {
                id: id,
            },
        });

        res.status(200).json({
            message: "Task deleted successfully",
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE TASK
const updateTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title } = req.body;

        if (!title || typeof title !== "string" || title.trim() === "") {
            return res.status(400).json({
                message: "Title is required",
            });
        }

        const updatedTask = await prisma.task.update({
            where: {
                id,
            },
            data: {
                title: title.trim(),
            },
        });

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);

        if (error.code === "P2025") {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createTask,
    getTaskById,
    deleteTask,
    updateTask,
};