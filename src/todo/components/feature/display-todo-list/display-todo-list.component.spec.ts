import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTodoListComponent } from './display-todo-list.component';

describe('DisplayTodoListComponent', () => {
  let component: DisplayTodoListComponent;
  let fixture: ComponentFixture<DisplayTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
