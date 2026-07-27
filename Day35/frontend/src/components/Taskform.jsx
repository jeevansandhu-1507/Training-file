import { useState } from "react";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");

  const submitTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await axios.post("http://localhost:5000/api/tasks", {
      title
    });

    setTitle("");
  };

  return (
    <form onSubmit={submitTask}>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>Add Task</button>

    </form>
  );
}

export default TaskForm;