import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/ui/auth-form/auth-form.component';
import { AuthPageComponent } from './components/page/auth-page/auth-page.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {StyleClassModule} from 'primeng/styleclass';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { DbTodoService } from 'src/todo/shared/db-todo.service';
import { TodoModule } from 'src/todo/todo.module';


@NgModule({
  declarations: [
    AuthFormComponent,
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    StyleClassModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.configGoudale1, "primary"),
  ],

  providers : [
    AuthService,
  ]

})
export class AuthModule { }
