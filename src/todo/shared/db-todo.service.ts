import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { mapKeyIntoPayload } from 'src/utils/map-key-in-payload.util';
import { Todo } from '../models/todo.model';
import { MessageService } from 'primeng/api';

@Injectable()
export class DbTodoService {

  private readonly _BASE_URL: string = "todos"
  ref: AngularFireList<Todo> = this.dbGoudale1.list(this._BASE_URL);

  constructor(
    private dbGoudale1: AngularFireDatabase,
    private messageService: MessageService,
  ) { }

  create(todo: Todo): void {
    this.ref.push(todo)
      .then(() =>
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Tâche bien ajoutée' })
      ).catch((err) => console.log(err, err.code, err.message))
  }

  getAllTodo(): Observable<Todo[]> {
    return mapKeyIntoPayload(this.ref.snapshotChanges())
  }

  delete(key: string | null): void {
    if (key) {
      this.ref.remove(key)
        .then(() => console.log("To Do supprimé"));
    }
  }

  update(key: string | null, todo: Todo): void {
    if (key) {
      this.ref.update(key, todo)
        .then(() => console.log("Update reussi"));
    }
  }
}

