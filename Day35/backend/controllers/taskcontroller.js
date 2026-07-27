const prisma = require("../db");
const { getIO } = require("../socket");

const getTasks = async (req, res) => {

    try {

        const tasks = await prisma.task.findMany();

        res.json(tasks);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};

const createTask = async (req, res) => {

    try {

        const { title } = req.body;

        const task = await prisma.task.create({
            data: {
                title
            }
        });

        const io = getIO();
        if (io) {
            io.emit("taskCreated", task);
        }

        res.status(201).json(task);

    } catch (err) {

        res.status(400).json({
            error: err.message
        });

    }

};

module.exports = {
    getTasks,
    createTask
};