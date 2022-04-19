import { Injectable } from '@angular/core';
import { ToDoItem } from './todoItem';
import { TODOITEMS } from './mock-todo-items';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  constructor(private messageService: MessageService) { }

  getToDoItems(): Observable<ToDoItem[]>{
    const todoitems = of(TODOITEMS);
    this.messageService.add('ToDoService: fetched todo services');
    return todoitems;
  }

}
