import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoHomeComponent } from './components/page/todo-home/todo-home.component';
import { CreateTodoComponent } from './components/feature/create-todo/create-todo.component';
import { DisplayTodoListComponent } from './components/feature/display-todo-list/display-todo-list.component';
import { FilterTodoComponent } from './components/feature/filter-todo/filter-todo.component';
import { TodoFormComponent } from './components/ui/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { TodoDetailsComponent } from './components/ui/todo-details/todo-details.component';
import { TodoFormUpdateComponent } from './components/ui/todo-form-update/todo-form-update.component';

@NgModule({
  declarations: [
    TodoHomeComponent,
    CreateTodoComponent,
    DisplayTodoListComponent,
    FilterTodoComponent,
    TodoFormComponent,
    TodoDetailsComponent,
    TodoFormUpdateComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
  ]
})
export class TodoModule { }
