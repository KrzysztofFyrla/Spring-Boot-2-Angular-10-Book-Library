import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSettingsRoutingModule } from './book-settings-routing.module';
import { BookSettingsLayoutComponent } from './book-settings-layout/book-settings-layout.component';
import {BookRatingComponent} from './book-rating/book-rating.component';
import {BookTypeComponent} from './book-type/book-type.component';
import {RatingDialogComponent} from './rating-dialog/rating-dialog.component';
import {TypeDialogComponent} from './type-dialog/type-dialog.component';
import {MaterialModule} from '../../material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    BookSettingsLayoutComponent,
    BookRatingComponent,
    BookTypeComponent,
    RatingDialogComponent,
    TypeDialogComponent
  ],
  imports: [
    CommonModule,
    BookSettingsRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class BookSettingsModule { }
