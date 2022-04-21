import { Injectable } from '@angular/core';
import { ToDoItem } from './todoItem';
//import { TODOITEMS } from './mock-todo-items';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  private taskUrl = "https://crudcrud.com/api/423cbc7c899247999613d64d719dd686/tasks";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http:HttpClient) { }

  
  getToDoItems(): Observable<ToDoItem[]>{
    return this.http.get<ToDoItem[]>(this.taskUrl);
  }

  getToDoItem( id: number ): Observable<ToDoItem> {
    const url = `${this.taskUrl}/?id=${id}`;
    return this.http.get<ToDoItem>(url);
  }


  addTask(task: ToDoItem){
    return this.http.post<ToDoItem>(this.taskUrl, task, this.httpOptions);
  }

}
