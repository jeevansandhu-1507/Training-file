const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to read tasks from tasks.json
async function readTasks() {
  try {
    const data = await fs.readFile('./tasks.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Function to write tasks to tasks.json
async function writeTasks(tasks) {
  await fs.writeFile(
    './tasks.json',
    JSON.stringify(tasks, null, 2)
  );
}

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await readTasks();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

// POST a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validation
    if (!title || !description) {
      return res.status(400).json({
        error: 'Title and description are required'
      });
    }

    const tasks = await readTasks();

    const newTask = {
      id: Date.now(),
      title,
      description
    };

    tasks.push(newTask);

    await writeTasks(tasks);

    res.status(201).json({
      message: 'Task created successfully',
      task: newTask
    });

  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});