import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookLibraryComponent} from './book-library/book-library/book-library.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '', redirectTo: 'books', pathMatch: 'full'
      },
      {
        path: 'books',
        component: BookLibraryComponent
      },
      {
        path: 'books',
        loadChildren: () => import('./book-library/book-library.module')
          .then(m => m.BookLibraryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
