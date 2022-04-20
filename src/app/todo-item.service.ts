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
    this.messageService.add('ToDoService: fetched todo items');
    return todoitems;
  }

  getToDoItem( id: number ): Observable<ToDoItem> {
    const todoItem = TODOITEMS.find(h => h.id ===id)!;
    this.messageService.add(`TodoItemService: fetch item id = ${id}`);
    return of(todoItem);
  }

}
