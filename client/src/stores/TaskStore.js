import { makeObservable, observable } from 'mobx';

class TaskStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    // Make an API request to get tasks from the server
    return fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => {
        this.tasks = data;
      });
  }
}

export default new TaskStore();
