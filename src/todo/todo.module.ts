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
import {ToastModule} from 'primeng/toast';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DbTodoService } from './shared/db-todo.service';
import { AuthService } from 'src/auth/shared/auth.service';
import { MessageService } from 'primeng/api';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { AuthModule } from 'src/auth/auth.module';

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
    ToastModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.configGoudale1, "primary"),
  ],

  providers : [
    DbTodoService,
  ]
})
export class TodoModule { }
