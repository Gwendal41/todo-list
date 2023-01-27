import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/todo/models/todo.model';
import { DbTodoService } from 'src/todo/shared/db-todo.service';

@Component({
  selector: 'ui-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output()
  sendNewTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  newTodo: Todo = new Todo('',0,false);

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
   this.sendNewTodo.emit(this.newTodo);
  }

}
