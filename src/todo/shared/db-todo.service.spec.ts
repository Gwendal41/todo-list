import { TestBed } from '@angular/core/testing';

import { DbTodoService } from './db-todo.service';

describe('DbTodoService', () => {
  let service: DbTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
