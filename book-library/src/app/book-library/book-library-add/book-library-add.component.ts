import { Component, OnInit } from '@angular/core';
import {Books} from '../model/books';
import {BookAuthor} from '../model/book-author';
import {BookRating} from '../model/book-rating';
import {BookType} from '../model/book-type';
import {BookLibraryService} from '../service/book-library.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {SettingService} from '../../settings/setting.service';

@Component({
  selector: 'app-book-library-add',
  templateUrl: './book-library-add.component.html',
  styleUrls: ['./book-library-add.component.scss']
})
export class BookLibraryAddComponent implements OnInit {

  books: Books = new Books();
  bookAuthor: Array<BookAuthor> = [];
  bookRating: Array<BookRating> = [];
  bookType: Array<BookType> [];
  submitted: boolean;

  public selectedFile;
  imgURL: any;

  constructor(private bookService: BookLibraryService,
              private router: Router,
              private snackBar: MatSnackBar,
              private httpClient: HttpClient,
              private configUrl: SettingService) {
  }

  ngOnInit(): void {
    this.getAuthor();
    this.getRating();
    this.getType();
  }

  newBook(): void {
    this.submitted = false;
    this.books = new Books();
  }

  save(): void {
    const uploadData = new FormData();
    uploadData.append('bookImage', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.namel;

    this.httpClient.post(this.configUrl.IMAGE_UPLOAD_URL, uploadData, {observe: 'response'})
      .subscribe((response) => {
        if (response.status === 200) {
          this.bookService.createBook(this.books)
            .subscribe(data => console.log(''), error => console.log(''));
          this.books = new Books();
          this.goToList();
        }
      });
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
    this.snackBar.open('Książka została dodana', '', {duration: 2000});
  }

  goToList(): void {
    /*this.router.navigate(['..']);*/
    const url = '/library/books';
    this.router.navigateByUrl(url);
  }

  getAuthor(): any {
    this.bookService
      .getBookAuthor()
      .then(successResponse => {
        // @ts-ignore
        this.bookAuthor = successResponse;
      });
  }

  getRating(): any {
    this.bookService
      .getBookRating()
      .then(successResponse => {
        // @ts-ignore
        this.bookRating = successResponse;
      });
  }

  getType(): any {
    this.bookService
      .getBookType()
      .then(successResponse => {
        // @ts-ignore
        this.bookType = successResponse;
      });
  }

  onFileChanged(event): void {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (ev) => {
      this.imgURL = reader.result;
    };
  }
}
