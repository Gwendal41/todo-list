import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/todo/models/todo.model';
import { DbTodoService } from 'src/todo/shared/db-todo.service';

@Component({
  selector: 'ui-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  formUpdateIsToggle: boolean = false;

  @Input()
  toDoChild!: Todo;

  @Output()
  sendToDoToDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  sendToDoUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(
    private dbToDOS : DbTodoService
  ) { }

  ngOnInit(): void {
  }

  emitToDoToDelete(): void {
    this.sendToDoToDelete.emit(this.toDoChild);
  }

  receiveToDoToUpdate(todo: Todo): void{
   this.dbToDOS.update(this.toDoChild.key, todo)
  }
}
