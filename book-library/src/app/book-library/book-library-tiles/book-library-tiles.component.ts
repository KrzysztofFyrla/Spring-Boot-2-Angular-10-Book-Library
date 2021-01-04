import {Component, OnInit, ViewChild} from '@angular/core';

import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {Observable} from 'rxjs';
import {Books} from '../model/books';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BookLibraryService} from '../service/book-library.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-library-tiles',
  templateUrl: './book-library-tiles.component.html',
  styleUrls: ['./book-library-tiles.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({opacity: 0, transform: 'translateY(-50px)'}),
            stagger(
              '50ms',
              animate(
                '500ms ease-in',
                style({opacity: 1, transform: 'translateY(0px)'}),
              ),
            ),
          ],
          {optional: true},
        ),
        query(
          ':leave',
          [animate('500ms', style({opacity: 0, transform: 'rotate(90deg)'}))],
          {
            optional: true,
          },
        ),
      ]),
    ]),
  ],
})
export class BookLibraryTilesComponent implements OnInit {

  booksObs: Observable<Books[]>;
  books: Array<Books>;
  books1: Array<Books>;

  // @ts-ignore
  dataSource = new MatTableDataSource<Books>(this.books);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bookService: BookLibraryService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
        this.handleResponse(data);
        /*this.books = data;*/
      },
      result => {
        this.refresh();
      });
  }

  private refresh(): void {
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  reloadData(): void {
    this.booksObs = this.bookService.getBookList();
    this.bookService.getBookList().subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.snackBar.open('Książka została usunięta', '', {duration: 2000});
  }

  editBook(id: number): void {
    const url = '/books/book-edit/' + id;
    this.router.navigateByUrl(url);
    this.reloadData();
  }

  addLibrary(): void {
    const url = '/books/book-add';
    this.router.navigateByUrl(url);
  }

  settingsLibrary(): void {
    const url = '/books/book-setting/type';
    this.router.navigateByUrl(url);
  }

  handleResponse(data): void {
    this.books = new Array<Books>();
    this.books1 = data;
    for (const book of this.books1) {

      const book2 = new Books();
      book2.id = book.id;
      book2.title = book.title;
      book2.date = book.date;
      book2.description = book.description;
      book2.imageName = book.imageName;
      book2.retrievedImage = 'data:image/jpeg;base64,' + book.image;
      book2.image = book.image;
      book2.typeId = book.typeId;
      book2.authorId = book.authorId;
      book2.ratingId = book.ratingId;
      this.books.push(book2);
    }
  }

}
