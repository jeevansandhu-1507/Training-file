// const express = require("express");
// const auth = require("../middleware/auth");

// const router = express.Router();

// let tasks = [
//     {
//         id: 1,
//         title: "Complete JWT Project"
//     },
//     {
//         id: 2,
//         title: "Submit Internship Task"
//     }
// ];

// // GET Tasks
// router.get("/", auth, (req, res) => {

//     res.json(tasks);

// });

// // CREATE Task
// router.post("/", auth, (req, res) => {

//     const { title } = req.body;

//     const newTask = {

//         id: tasks.length + 1,
//         title

//     };

//     tasks.push(newTask);

//     /*
//     Broadcast to every connected client
//     */
//     const io = req.app.get("io");

//     io.emit("taskCreated", newTask);

//     console.log("Broadcast Sent");

//     res.status(201).json(newTask);

// });

// module.exports = router;