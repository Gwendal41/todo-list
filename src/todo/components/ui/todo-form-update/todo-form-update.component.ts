import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/todo/models/todo.model';
import { DbTodoService } from 'src/todo/shared/db-todo.service';

@Component({
  selector: 'ui-todo-form-update',
  templateUrl: './todo-form-update.component.html',
  styleUrls: ['./todo-form-update.component.scss']
})
export class TodoFormUpdateComponent implements OnInit {

  @Output()
  sendTodoToUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();

  toDoUpdate: Todo = new Todo('',0, false);

  constructor( private dbToDoS: DbTodoService) { }

  ngOnInit(): void {
  }

  emitToUpdate(): void {
    this.sendTodoToUpdate.emit(this.toDoUpdate);
  }

}
