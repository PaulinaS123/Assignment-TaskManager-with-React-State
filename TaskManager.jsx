import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: `Task ${tasks.length + 1}`,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Manager</h2>

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginTop: "10px" }}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
