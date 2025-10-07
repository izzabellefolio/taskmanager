import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task [] = [];
  private nextId = 1;

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask = {
      id: this.tasks.length + 1,
      title,
      completed: false
    };
    this.tasks.push(newTask);
  }

    toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  getTaskCount(): number {
    return this.tasks.length;
  }
}
