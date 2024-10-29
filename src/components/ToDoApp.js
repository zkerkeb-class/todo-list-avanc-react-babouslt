import React, { useState, useMemo, useEffect } from "react";
import { useTasksContext } from "../contexts/TaskContext.js";
import MovingImage from "./MovingImage/MovingImage.js";
import "../App.css";

export default function TodoApp() {
  const { tasks, addTask, removeTask, toggleTask } = useTasksContext();
  const [showImage, setShowImage] = useState(false);
  const [filter, setFilter] = useState("");
  const [newTask, setNewTask] = useState("");
  const [score, setScore] = useState(0);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "incomplete") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  }, [tasks, filter]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask("");
      if (newTask === "GRAOU") {
        const audio = new Audio("/audio/les_arabes.mp3");
        audio.play();
        setShowImage(true);
      }
    }
  };

  useEffect(() => {
    if (showImage) {
      console.log("ouuuuuu");
      document.body.classList.add("cursor-aim");
    } else {
      console.log("ouuuuuu");

      document.body.classList.remove("cursor-aim");
    }

    // Nettoyage
    return () => {
      document.body.classList.remove("cursor-aim");
    };
  }, [showImage]);

  const playSoundOuououuuuu = () => {
    const audio = new Audio("/audio/ouououuuuu.m4a");
    audio.play();
  };

  const playTravaille = () => {
    if (newTask !== "GRAOU") {
      const audio = new Audio("/audio/travaille.m4a");
      audio.play();
    }
  };

  return (
    <div>
      {showImage && (
        <div>
          {" "}
          <p>Choppez son énorme boule</p>
          <button
            onClick={() => {
              setShowImage((prev) => !prev);
              setScore(0);
            }}
          >
            {showImage ? "Cacher l'image" : "Afficher l'image"}
          </button>
          <p>Score: {score}</p>
          <MovingImage
            show={showImage}
            onClick={() => setScore(score + 1)}
          />{" "}
        </div>
      )}
      <a
        href="https://www.op.gg/summoners/euw/hikkary-EUW"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/zak.png" alt="Logo" className="logo" />
      </a>
      <h1>Liste de tâches</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button
          onClick={() => {
            handleAddTask();
            playTravaille();
          }}
          disabled={!newTask.trim()}
        >
          Ajouter
        </button>
      </div>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Toutes
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Terminées
        </button>
        <button
          className={filter === "incomplete" ? "active" : ""}
          onClick={() => setFilter("incomplete")}
        >
          Non terminées
        </button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            {task.text}
            <div>
              <button
                className="complete-btn"
                onClick={() => {
                  toggleTask(index);
                  playSoundOuououuuuu();
                }}
              >
                {task.completed ? "Annuler" : "Terminer"}
              </button>
              <button
                onClick={() => {
                  removeTask(index);
                  playSoundOuououuuuu();
                }}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
