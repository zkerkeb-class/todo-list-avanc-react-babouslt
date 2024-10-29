// CompletedTasks.js
import React from "react";
import { useTasksContext } from "../contexts/TaskContext.js";

function CompletedTasks() {
  const { tasks } = useTasksContext();

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h2>Tâches Terminées</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
