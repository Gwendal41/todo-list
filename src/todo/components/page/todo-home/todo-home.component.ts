import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth/shared/auth.service';


@Component({
  selector: 'page-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  searchedString : string = "";

  constructor(
    private dbAuthS : AuthService
  ) { }

  ngOnInit(): void {
  }

  receiveSearchedString(str : string): void{
  this.searchedString = str;
  }

  signOut(): void {
    this.dbAuthS.signOut()
  }

}
