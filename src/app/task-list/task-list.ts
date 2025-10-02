import { Component } from '@angular/core';
import { TaskService, Task } from '../TaskService/task-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskList {
  constructor(public taskService: TaskService) {}

  filter: 'all' | 'completed' | 'pending' = 'all';

  get tasks(): Task[] {
    const tasks = this.taskService.getTasks();
    if (this.filter === 'completed') {
      return tasks.filter(t => t.completed);
    } else if (this.filter === 'pending') {
      return tasks.filter(t => !t.completed);
    }
    return tasks;
  }

  setFilter(filter: 'all' | 'completed' | 'pending') {
    this.filter = filter;
  }

  completedCount(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  pendingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  ngOnInit(): void {
    this.taskService.getTasks();
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }
}
