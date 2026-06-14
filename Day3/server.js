const express = require('express');
const app = express();

app.use(express.json());

const tasks = [];

app.post('/api/tasks', (req, res) => {
    const task = {
        name: req.body.name,
        description: req.body.description
    };

    tasks.push(task);

    res.json({
        message: 'Task added successfully',
        tasks: tasks
    });
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});