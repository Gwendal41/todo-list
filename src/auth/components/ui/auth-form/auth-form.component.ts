import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/auth/models/auth.model';
import { AuthService } from 'src/auth/shared/auth.service';

@Component({
  selector: 'ui-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  newUser : Auth = new Auth("","");
  userCreated = true;

  constructor(
    private dbAuthS : AuthService
  ) { }

  ngOnInit(): void {
  }

  signUp(): void {
    this.dbAuthS.signUp(this.newUser.email, this.newUser.password)
  }

  signIn(): void {
    this.dbAuthS.signIn(this.newUser.email, this.newUser.password);
  }

  resetPassword(): void {
    this.dbAuthS.resetPassword(this.newUser.email);
  }

}
