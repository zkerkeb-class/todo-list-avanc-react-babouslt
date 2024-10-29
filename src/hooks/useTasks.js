// useTasks.js
import { useState, useCallback, useEffect } from "react";

function useTasks(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = useCallback((task) => {
    setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
  }, []);

  const removeTask = useCallback((index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }, []);

  const toggleTask = useCallback((index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
  };
}

export default useTasks;
