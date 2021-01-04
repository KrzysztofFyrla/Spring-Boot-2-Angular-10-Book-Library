import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Books} from '../model/books';
import {BookLibraryService} from '../service/book-library.service';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.scss']
})
export class BookLibraryComponent implements OnInit {

  booksObs: Observable<Books[]>;
  books: Books[];

  displayedColumns: string[] = ['id', 'title', 'date', 'description', 'typeId', 'authorId', 'ratingId', 'edit', 'delete'];

  // @ts-ignore
  dataSource = new MatTableDataSource<Books>(this.books);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private bookService: BookLibraryService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.bookService.getBookList().subscribe(data => {
        this.books = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
    this.snackBar.open('Książka została usunięta', '', { duration: 2000 });
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

}
