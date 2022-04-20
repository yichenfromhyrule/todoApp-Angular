import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'detail/:id', component:TodoItemDetailComponent},
  {path: 'todoitems', component:TodoItemsComponent},
  {path: 'dashboard', component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
