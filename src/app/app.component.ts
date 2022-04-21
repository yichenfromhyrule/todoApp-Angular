import { Component } from '@angular/core';
import {TodoItemService} from './todo-item.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO APP';
  constructor(private todo:TodoItemService){
    this.todo.getToDoItems().subscribe(data=>{
      console.warn(data);
    })
  }
}
