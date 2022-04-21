import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todoItem';
import { TodoItemService } from '../todo-item.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  todoItems: ToDoItem[] = [];

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.getToDoItems();
  }

  getToDoItems():void {
    this.todoItemService.getToDoItems()
      .subscribe(todoItems => this.todoItems = todoItems);
    
  }
  
  add(name: string):void{
    name = name.trim();
    if(!name) {return;}
    this.todoItemService.addTask({name} as ToDoItem).subscribe(
      task =>{
      this.todoItems.push(task);
    })
  }

}
