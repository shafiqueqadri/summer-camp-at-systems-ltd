import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/interfaces/todo';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})
export class TodoElementComponent implements OnInit {

  @Input() todo: ITodo;
  @Output() removeTodo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeTodoFunction = (): void => {
    this.removeTodo.emit(this.todo);
  }
}
