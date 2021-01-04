import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLibraryEditComponent } from './book-library-edit.component';

describe('BookLibraryEditComponent', () => {
  let component: BookLibraryEditComponent;
  let fixture: ComponentFixture<BookLibraryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLibraryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLibraryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
