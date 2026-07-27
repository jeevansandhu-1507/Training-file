import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Task List</h1>

      {tasks.map((tasks) => (
        <div key={tasks.id}>
          {tasks.title}
        </div>
      ))}
    </div>
  );
}

export default App;