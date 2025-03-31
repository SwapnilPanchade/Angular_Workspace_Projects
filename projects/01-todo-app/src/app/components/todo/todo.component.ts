import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  newTask: string = '';
  tasks: { name: string; isdone: boolean }[] = [];

  initTask() {
    let t1 = 'This is new task';
    this.newTask = t1;
    this.addTask();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, isdone: false });
      this.newTask = '';
      this.saveTasks();
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.newTask));
  }

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  toggleTask(index: number) {
    this.tasks[index].isdone = !this.tasks[index].isdone;
    this.saveTasks();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
}
