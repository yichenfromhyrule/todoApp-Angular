import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todoItem';
import { TodoItemService } from '../todo-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoItems: ToDoItem[] = [];
  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.getToDoItems();
  }

  getToDoItems():void {
    this.todoItemService.getToDoItems()
      .subscribe(todoItems => this.todoItems = todoItems.slice(1, 5));
    
  }
}
