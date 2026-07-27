import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const response = await fetch(
      "http://localhost:5000/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      }
    );

    const newTask = await response.json();

    addTask(newTask);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;