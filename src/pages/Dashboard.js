import React, { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard({ onLogout }) {
  const [tasks, setTasks] = useState([]);

  // Create task state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Edit task state
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("PENDING");

  // Load tasks
  const loadTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      if (err.response?.status === 401) {
        onLogout();
      }
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Create task
  const createTask = async () => {
    if (!title) return;

    await api.post("/tasks", {
      title,
      description,
      status: "PENDING",
    });

    setTitle("");
    setDescription("");
    loadTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  // Start editing
  const startEdit = (task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description || "");
    setEditStatus(task.status);
  };

  // Update task
  const updateTask = async () => {
    await api.put(`/tasks/${editingTaskId}`, {
      title: editTitle,
      description: editDescription,
      status: editStatus,
    });

    setEditingTaskId(null);
    loadTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <button onClick={onLogout}>Logout</button>

      <hr />

      {/* Create Task */}
      <h3>Create Task</h3>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button onClick={createTask}>Add Task</button>

      <hr />

      {/* Edit Task */}
      {editingTaskId && (
        <div>
          <h3>Edit Task</h3>

          <input
            placeholder="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <br />

          <input
            placeholder="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <br />

          <select
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
          >
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>

          <br />

          <button onClick={updateTask}>Update</button>
          <button onClick={() => setEditingTaskId(null)}>Cancel</button>

          <hr />
        </div>
      )}

      {/* Task List */}
      <h3>My Tasks</h3>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "15px" }}>
            <b>Title:</b> {task.title} <br />
            <b>Description:</b> {task.description || "N/A"} <br />
            <b>Status:</b> {task.status} <br />
            <button onClick={() => startEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
