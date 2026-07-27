import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      newTask,
    ]);
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />

      <h2>Task List</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;