import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../todoItem';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoItemService } from '../todo-item.service';


@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.css']
})

export class TodoItemDetailComponent implements OnInit {
  todoItem: ToDoItem | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private todoItemService: TodoItemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getToDoItem();
  }

  getToDoItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoItemService.getToDoItem(id)
      .subscribe(todoItem => this.todoItem = todoItem);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.todoItem) {
      this.todoItemService.updateToDoItem(this.todoItem)
        .subscribe(() => this.goBack());
    }
  }

}
