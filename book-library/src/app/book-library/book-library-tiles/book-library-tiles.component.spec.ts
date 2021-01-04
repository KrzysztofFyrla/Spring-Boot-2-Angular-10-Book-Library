import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLibraryTilesComponent } from './book-library-tiles.component';

describe('BookLibraryTilesComponent', () => {
  let component: BookLibraryTilesComponent;
  let fixture: ComponentFixture<BookLibraryTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLibraryTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLibraryTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
