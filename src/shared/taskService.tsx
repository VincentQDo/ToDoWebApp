export const getTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };
  
  export const saveTasks = (tasks: any) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  