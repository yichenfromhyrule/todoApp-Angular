import { Component, OnInit } from '@angular/core';

import { ToDoItem } from '../todoItem';

import { TodoItemService } from '../todo-item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  todoItems: ToDoItem[] = [];

  selectedToDoItem?: ToDoItem;
  
  constructor(private todoItemService: TodoItemService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getToDoItems();
  }

  onSelect(todoItem: ToDoItem): void {
    this.selectedToDoItem = todoItem;
    this.messageService.add(`ToDoItemComponent: Selected todo item id = ${todoItem.id}`);
  }

  getToDoItems():void {
    this.todoItemService.getToDoItems()
      .subscribe(todoItems => this.todoItems = todoItems);
    
  }
  

}
