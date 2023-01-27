import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHomeComponent } from 'src/todo/components/page/todo-home/todo-home.component';
import { TodoModule } from 'src/todo/todo.module';

const routes: Routes = [
  {path : 'todo', loadChildren : () => import('../todo/todo.module').then(m => m.TodoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
