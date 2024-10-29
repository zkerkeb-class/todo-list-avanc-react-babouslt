// App.js
import React from "react";
import { TasksProvider } from "./contexts/TaskContext.js";
import TodoApp from "./components/ToDoApp.js";
import CompletedTasks from "./components/CompletedTasks.js";
import "./App.css";
export default function App() {
  return (
    <TasksProvider>
      <TodoApp />
      <CompletedTasks />
    </TasksProvider>
  );
}
