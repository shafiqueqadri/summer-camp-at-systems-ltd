import { Component } from '@angular/core';
import { ITodo } from 'src/interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Array<ITodo> = [];
  public todo: string;
  title = 'session3';

  addTodo = (): void => {
    // this.todos.push(this.todo);
    const todo: ITodo = {
      title: this.todo,
      id: new Date().getTime()
    };
    this.todos = [...this.todos, todo];
    this.todo = '';
  }

  removeTodo = (todo: ITodo): void => {
    // this.todos = this.todos.filter((_todo: ITodo) => todo.id !== _todo.id);
    const foundIndex = this.todos.findIndex((_todo: ITodo) => _todo.id === todo.id);

    // let newList: Array<ITodo> = [];
    // this.todos.forEach((_todo: ITodo) => {
    //   if (_todo.id !== todo.id) {
    //     newList = [...newList, _todo];
    //   }
    // });

    delete this.todos[foundIndex];
    // this.todos = newList;
    // this.todos.splice(foundIndex, 1);
  }
}
