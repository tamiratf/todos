import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  todo: string = "";

  todos: string[] = [];

  ngOnInit() {
  }

  addTodo() {
    this.todos.push(this.todo);
    this.todo = "";
  }

  removeTodo(todo: string) {
    this.todos = _.reject(this.todos, function (otodo) {
      return otodo === todo;
    });
  }

}
