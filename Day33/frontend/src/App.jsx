import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {

  const [title, setTitle] = useState("");

  useEffect(() => {

    socket.on("connect", () => {

      console.log("Connected");

    });

    socket.on("taskCreated", (task) => {

      console.log("New Task");

      console.log(task);

      alert("New Task: " + task.title);

    });

    return () => {

      socket.off("taskCreated");

    };

  }, []);

  const createTask = async () => {

    const token = localStorage.getItem("token");

    await fetch("http://localhost:5000/api/tasks", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`

      },

      body: JSON.stringify({
        title
      })

    });

    setTitle("");

  };

  return (

    <div style={{ padding: 40 }}>

      <h2>Create Task</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Name"
      />

      <button onClick={createTask}>
        Add Task
      </button>

    </div>

  );

}

export default App;