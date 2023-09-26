// client/src/components/TaskList.js
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TaskStore from '../stores/TaskStore';

const TaskList = observer(() => {
  useEffect(() => {
    TaskStore.getTasks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = {
      title: formData.get('title'),
      description: formData.get('description'),
    };

    TaskStore.addTask(task);

    // Make an API request to submit the task to the server
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    e.target.reset();
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {TaskStore.tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TaskList;
