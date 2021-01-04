import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookSettingsLayoutComponent} from './book-settings-layout/book-settings-layout.component';
import {BookTypeComponent} from './book-type/book-type.component';
import {BookRatingComponent} from './book-rating/book-rating.component';

const routes: Routes = [
  {
    path: '',
    component: BookSettingsLayoutComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {
        path: 'type',
        component: BookTypeComponent
      },
      {
        path: 'rating',
        component: BookRatingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSettingsRoutingModule { }
