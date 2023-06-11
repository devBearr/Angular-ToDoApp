import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItemText: string = '';
  allTodoItems: TodoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createNewTodo() : void {
    let newItem: TodoItem = {
      itemName: this.todoItemText,
      completed: false
    }
    this.allTodoItems.push(newItem);
    this.todoItemText = '';
  }

  clearTodos(todoType: string): void {
    let uncompletedItems = this.allTodoItems.filter( i => i.completed === false);

    if (todoType === 'completed') {
      this.allTodoItems = uncompletedItems;
    }
    else {
      this.allTodoItems = [];
    }

  }

  toggleComplete(item: TodoItem): void {
    item.completed = !item.completed;
  }


}
