import { useState } from "react";

const defaultTasks = [
  { id: 1, title: "Builder le projet React avec npm run build", done: false },
  { id: 2, title: "Installer Nginx sur le serveur", done: false },
  { id: 3, title: "Configurer Nginx pour servir le dossier dist", done: false },
  { id: 4, title: "Transferer les fichiers sur le serveur", done: false },
  { id: 5, title: "Verifier que le site est accessible", done: false },
];

let nextId = 6;

function App() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [newTitle, setNewTitle] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setTasks([{ id: nextId++, title: newTitle, done: false }, ...tasks]);
    setNewTitle("");
  }

  function toggleTask(task) {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <header>
        <h1>Mes Taches</h1>
        <p className="subtitle">Application de gestion de taches</p>
      </header>

      <form onSubmit={addTask} className="add-form">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Nouvelle tache..."
          className="input"
        />
        <button type="submit" className="btn btn-add">
          Ajouter
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">Aucune tache pour le moment</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={`task ${task.done ? "done" : ""}`}>
              <div className="task-content" onClick={() => toggleTask(task)}>
                <span className="checkbox">{task.done ? "[x]" : "[ ]"}</span>
                <span className="task-title">{task.title}</span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="btn btn-delete"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}

      <footer>
        <p>Cours CI/CD - Liste de taches</p>
      </footer>
    </div>
  );
}

export default App;
