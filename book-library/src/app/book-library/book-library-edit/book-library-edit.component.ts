import { Component, OnInit } from '@angular/core';
import {Books} from '../model/books';
import {BookAuthor} from '../model/book-author';
import {BookRating} from '../model/book-rating';
import {BookType} from '../model/book-type';
import {BookLibraryService} from '../service/book-library.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-library-edit',
  templateUrl: './book-library-edit.component.html',
  styleUrls: ['./book-library-edit.component.scss']
})
export class BookLibraryEditComponent implements OnInit {

  id: number;
  book: Books = new Books();
  booksArray: Array<Books> = [];
  bookAuthor: Array<BookAuthor> = [];
  bookRating: Array<BookRating> = [];
  bookType: Array<BookType> = [];

  books: Array<Books>;
  books1: Array<Books>;

  constructor(private bookService: BookLibraryService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookService.getBookId(this.id)
      .subscribe(data => {
        this.book = data;
      }, error => console.log(error));

    this.getBooks();
    this.getAuthor();
    this.getRating();
    this.getType();

    this.bookService.getBooks().subscribe(data => {
      this.handleResponse(data);
    });
  }

  private updateBook(id: number): void {
    this.bookService.edit(this.book, id);
    this.goToList();
  }

  private getBooks(): any {
    this.bookService
      .getBookListRelation()
      .then(successResponse => {
        // @ts-ignore
        this.booksArray = successResponse;
      });
  }

  private getAuthor(): any {
    this.bookService
      .getBookAuthor()
      .then(successResponse => {
        // @ts-ignore
        this.bookAuthor = successResponse;
      });
  }

  private getRating(): any {
    this.bookService
      .getBookRating()
      .then(successResponse => {
        // @ts-ignore
        this.bookRating = successResponse;
      });
  }

  private getType(): any {
    this.bookService
      .getBookType()
      .then(successResponse => {
        // @ts-ignore
        this.bookType = successResponse;
      });
  }

  private goToList(): void {
    this.router.navigate(['/library/books']);
  }

  onSubmit(): void {
    this.updateBook(this.book.id);
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
