import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos!: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is title',
        desc: 'Thi is desc',
        active: false,
      },
      {
        sno: 2,
        title: 'This is title',
        desc: 'Thi is desc',
        active: true,
      },
      {
        sno: 3,
        title: 'This is title',
        desc: 'Thi is desc',
        active: true,
      },
    ];
  }
}
