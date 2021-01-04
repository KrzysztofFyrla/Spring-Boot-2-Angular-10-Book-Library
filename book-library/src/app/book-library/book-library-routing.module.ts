import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookLibraryAddComponent} from './book-library-add/book-library-add.component';
import {BookLibraryEditComponent} from './book-library-edit/book-library-edit.component';
import {BookLibraryTilesComponent} from './book-library-tiles/book-library-tiles.component';

const routes: Routes = [
  {
    path: 'book-add',
    component: BookLibraryAddComponent
  },
  {
    path: 'book-edit/:id',
    component: BookLibraryEditComponent
  },
  {
    path: 'books-view',
    component: BookLibraryTilesComponent
  },
  {
    path: 'book-setting',
    loadChildren: () => import('./book-settings/book-settings.module')
      .then(m => m.BookSettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookLibraryRoutingModule { }
