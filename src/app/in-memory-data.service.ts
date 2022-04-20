import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDoItem } from './todoItem';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todoItems = [
      { id: 11, name: 'Eat Apple' },
      { id: 12, name: 'Eat Banana' },
      { id: 13, name: 'Eat Peach' },
      { id: 14, name: 'Eat Pear' },
      { id: 15, name: 'Eat Chicken' },
      { id: 16, name: 'Eat Beef' },
      { id: 17, name: 'Eat Pork' },
      { id: 18, name: 'Eat Lamb' },
      { id: 19, name: 'Eat Rice' },
      { id: 20, name: 'Eat Bread' }
    ];
    return {todoItems};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todoItems: ToDoItem[]): number {
    return todoItems.length > 0 ? Math.max(...todoItems.map(todoItem => todoItem.id)) + 1 : 11;
  }
}