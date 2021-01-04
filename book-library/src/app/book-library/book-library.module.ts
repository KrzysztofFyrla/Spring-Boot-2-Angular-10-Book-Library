import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookLibraryRoutingModule } from './book-library-routing.module';
import { BookLibraryComponent } from './book-library/book-library.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import { BookLibraryAddComponent } from './book-library-add/book-library-add.component';
import { BookLibraryEditComponent } from './book-library-edit/book-library-edit.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BookLibraryTilesComponent } from './book-library-tiles/book-library-tiles.component';

@NgModule({
  declarations: [BookLibraryComponent, BookLibraryAddComponent, BookLibraryEditComponent, BookLibraryTilesComponent],
  imports: [
    CommonModule,
    BookLibraryRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class BookLibraryModule { }
