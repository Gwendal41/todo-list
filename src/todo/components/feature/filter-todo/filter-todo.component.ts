import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'feat-filter-todo',
  templateUrl: './filter-todo.component.html',
  styleUrls: ['./filter-todo.component.scss']
})
export class FilterTodoComponent implements OnInit {

  @Output() 
  sendSearchedString: EventEmitter<string> = new EventEmitter<string>();


  searchedString: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChange(): void {
    this.sendSearchedString.emit(this.searchedString);
  }

}
