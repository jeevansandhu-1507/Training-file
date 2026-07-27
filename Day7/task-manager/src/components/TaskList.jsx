function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <span>
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;