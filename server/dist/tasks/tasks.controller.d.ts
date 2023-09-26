import { Task } from './task.model';
export declare class TasksController {
    private tasks;
    getTasks(): Task[];
    createTask(task: Task): void;
}
