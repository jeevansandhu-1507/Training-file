import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [showTasks, setShowTasks] = useState(true);

  const [tasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Practice Components",
      status: "Pending"
    }
  ]);

  return (
    <div>
      <TaskForm />

      <button
        onClick={() => setShowTasks(!showTasks)}
      >
        Toggle Tasks
      </button>

      {showTasks && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;