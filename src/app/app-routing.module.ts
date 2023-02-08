import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/core/guards/auth.guard';

const routes: Routes = [
  {path : 'todo', loadChildren : () => import('../todo/todo.module').then(m => m.TodoModule), canActivate:[AuthGuard]},
  {path : 'login', loadChildren : () => import('../auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
