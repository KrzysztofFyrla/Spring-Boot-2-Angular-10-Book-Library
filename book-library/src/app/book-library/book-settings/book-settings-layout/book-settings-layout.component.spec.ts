import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSettingsLayoutComponent } from './book-settings-layout.component';

describe('BookSettingsLayoutComponent', () => {
  let component: BookSettingsLayoutComponent;
  let fixture: ComponentFixture<BookSettingsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSettingsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSettingsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
