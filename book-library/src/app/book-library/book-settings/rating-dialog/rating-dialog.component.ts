import {Component, OnInit} from '@angular/core';
import {BookRating} from '../../model/book-rating';
import {BookLibraryService} from '../../service/book-library.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss']
})
export class RatingDialogComponent implements OnInit {

  rating: BookRating = new BookRating();
  submitted: boolean;

  constructor(private bookService: BookLibraryService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.bookService.createBookRating(this.rating)
      .subscribe(data => console.log(''), error => console.log(''));
    this.rating = new BookRating();
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
    this.snackBar.open('Ocena została dodana', '', { duration: 2000 });
  }
}
