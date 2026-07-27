const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Create HTTP server
const server = http.createServer(app);

// Create Socket.IO server
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// Make io available in routes/controllers
app.set("io", io);

// Store tasks in memory
let tasks = [];

// Socket connection
io.on("connection", (socket) => {
    console.log("Client Connected");

    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });
});

// Create Task API
app.post("/tasks", (req, res) => {

    const task = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(task);

    // Broadcast event
    const io = req.app.get("io");

    io.emit("taskCreated", {
        message: "New task created successfully!",
        task: task
    });

    res.json(task);

});

// Get Tasks
app.get("/tasks", (req, res) => {

    res.json(tasks);

});

server.listen(5000, () => {

    console.log("Server running on port 5000");

});