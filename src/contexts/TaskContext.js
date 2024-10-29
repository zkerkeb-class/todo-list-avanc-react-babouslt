// TasksContext.js
import React, { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks.js"; // Le hook personnalisé pour gérer les tâches
import useFetch from "../hooks/useFetch.js"; // Le hook personnalisé pour récupérer des données

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const {
    data: fetchedTasks,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/todos"); // Remplace par l'URL de ton API

  const { tasks, addTask, removeTask, toggleTask } = useTasks(
    fetchedTasks || []
  );

  if (loading) return <div>Chargement des tâches...</div>;
  if (error) return <div>Erreur lors du chargement des tâches</div>;

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasksContext() {
  return useContext(TasksContext);
}
