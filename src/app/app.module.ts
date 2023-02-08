import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessageService} from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/auth/shared/auth.service';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    MessageService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
