import { useEffect, useState } from "react";
import axios from "axios";
import socket from "./socket";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();

    socket.on("taskCreated", (task) => {
      console.log("New Task Received");
      console.log(task);

      setTasks((previousTasks) => [...previousTasks, task]);
    });

    return () => {
      socket.off("taskCreated");
    };
  }, []);

  const loadTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks");
    setTasks(response.data);
  };

  return (
    <div className="container">
      <h1>Socket.IO Task App</h1>

      <TaskForm />

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;