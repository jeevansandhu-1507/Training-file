function TaskList({ tasks }) {
  return (
    <div>

      <h2>Tasks</h2>

      {
        tasks.length === 0 ? (
          <p>No Tasks</p>
        ) : (
          <ul>

            {
              tasks.map((task) => (
                <li key={task.id}>
                  {task.title}
                </li>
              ))
            }

          </ul>
        )
      }

    </div>
  );
}

export default TaskList;