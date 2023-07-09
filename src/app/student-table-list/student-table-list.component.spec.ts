import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableListComponent } from './student-table-list.component';

describe('StudentTableListComponent', () => {
  let component: StudentTableListComponent;
  let fixture: ComponentFixture<StudentTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
