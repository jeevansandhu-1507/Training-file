import { useState } from "react";

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <p>Current Task: {taskName}</p>
    </div>
  );
}

export default TaskForm;