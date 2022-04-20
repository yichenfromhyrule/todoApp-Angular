import { Injectable } from '@angular/core';
import { ToDoItem } from './todoItem';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  //private todoItemsUrl = 'https://crudcrud.com/api/423cbc7c899247999613d64d719dd686/todoitems';
  private todoItemsUrl = 'api/todoitems';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private log(message: string) {
    this.messageService.add(`TodoItemService: ${message}`);
  }

  getToDoItems(): Observable<ToDoItem[]>{
    return this.http.get<ToDoItem[]>(this.todoItemsUrl)
    .pipe(
      tap(_ => this.log(`fetched items`)),
      catchError(this.handleError<ToDoItem[]>('getToDoItems', []))
    );
  }

  getToDoItem( id: number ): Observable<ToDoItem> {
    const url = `${this.todoItemsUrl}/${id}`;
    return this.http.get<ToDoItem>(url)
    .pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<ToDoItem>('getToDoItem id = ${id}'))
    );
    
  }

  updateToDoItem(todoItem: ToDoItem):Observable<any> {
    return this.http.put(this.todoItemsUrl, todoItem, this.httpOptions).pipe(
      tap(_=>this.log(`updated item id=${todoItem.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  /** POST: add a new hero to the server */
  addToDoItem(todoItem: ToDoItem):Observable<ToDoItem> {
    return this.http.post<ToDoItem>(this.todoItemsUrl, todoItem, this.httpOptions)
    .pipe(
      tap((newToDoItem:ToDoItem) => this.log(`added items w/ id=${newToDoItem.id}`)),
      catchError(this.handleError<ToDoItem>('addToDoItem'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
