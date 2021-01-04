import { Component, OnInit } from '@angular/core';
import {BookType} from '../../model/book-type';
import {BookLibraryService} from '../../service/book-library.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-type-dialog',
  templateUrl: './type-dialog.component.html',
  styleUrls: ['./type-dialog.component.scss']
})
export class TypeDialogComponent implements OnInit {

  type: BookType = new BookType();
  submitted: boolean;

  constructor(private bookService: BookLibraryService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  save(): void {
    this.bookService.createBookType(this.type)
      .subscribe(data => console.log(''), error => console.log(''));
    this.type = new BookType();
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
    this.snackBar.open('Gatunek został dodany', '', { duration: 2000 });
  }
}
