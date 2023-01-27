import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Todo } from 'src/todo/models/todo.model';
import { DbTodoService } from 'src/todo/shared/db-todo.service';

@Component({
  selector: 'feat-display-todo-list',
  templateUrl: './display-todo-list.component.html',
  styleUrls: ['./display-todo-list.component.scss']
})
export class DisplayTodoListComponent implements OnInit, OnChanges {

  @Input()
  searchedStringChild : string ="";

  toDoList: Todo[]= [];
  toDoListFiltered: Todo[]=[];

  constructor(private dbToDoS: DbTodoService) { }

  ngOnChanges(): void {
    this.formatInputStrAndFilterToDoList();
  }

  ngOnInit(): void {
    this.dbToDoS.getAllTodo().subscribe(toDoDataFromFirebase => 
      this.toDoList = toDoDataFromFirebase);
  }

  formatInputStrAndFilterToDoList(): void {
    let searchedStr : string = this.searchedStringChild;
    searchedStr.trim();
    searchedStr = searchedStr.toLowerCase();
    this.toDoListFiltered = this.toDoList.filter(todo => todo.name.includes(searchedStr))
  }

  receiveToDoToDelete(todo: Todo): void {
    this.dbToDoS.delete(todo.key)
  }

}
