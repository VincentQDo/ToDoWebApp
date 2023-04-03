import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getTasks, saveTasks } from "../shared/taskService";
import { signOut } from "../shared/authService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const history = useHistory();

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, []);

  const addTask = () => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleSignOut = async () => {
    await signOut();
    history.push("/");
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add Task</button>
      <br />
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};
export default TaskList;