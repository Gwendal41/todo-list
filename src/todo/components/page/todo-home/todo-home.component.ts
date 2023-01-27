import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'page-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  searchedString : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  receiveSearchedString(str : string): void{
  this.searchedString = str;
  }

}
