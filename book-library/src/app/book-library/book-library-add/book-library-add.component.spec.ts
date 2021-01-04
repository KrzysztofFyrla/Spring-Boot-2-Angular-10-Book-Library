import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLibraryAddComponent } from './book-library-add.component';

describe('BookLibraryAddComponent', () => {
  let component: BookLibraryAddComponent;
  let fixture: ComponentFixture<BookLibraryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLibraryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLibraryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
