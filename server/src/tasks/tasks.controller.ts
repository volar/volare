import { Controller, Get, Post, Body } from '@nestjs/common';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  private tasks: Task[] = [];

  @Get()
  getTasks(): Task[] {
    return this.tasks;
  }

  @Post()
  createTask(@Body() task: Task) {
    this.tasks.push(task);
  }
}