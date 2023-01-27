import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/todo/models/todo.model';
import { DbTodoService } from 'src/todo/shared/db-todo.service';

@Component({
  selector: 'feat-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  isFormToggled: boolean = false;

  constructor(private dbToDoS : DbTodoService ) { }

  ngOnInit(): void {
  }

  receiveNewTodo(todo:Todo): void {
    this.dbToDoS.create(todo);
  }
  
}
