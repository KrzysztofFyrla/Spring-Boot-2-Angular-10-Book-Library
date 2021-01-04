import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {BookRating} from '../../model/book-rating';
import {MatPaginator} from '@angular/material/paginator';
import {BookType} from '../../model/book-type';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {BookLibraryService} from '../../service/book-library.service';
import {MatDialog} from '@angular/material/dialog';
import {RatingDialogComponent} from '../rating-dialog/rating-dialog.component';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent implements OnInit {

  ratingObs: Observable<BookRating[]>;
  ratings: BookRating[];

  displayedColumns: string[] = ['id', 'rating', 'dateRating', 'delete'];

  // @ts-ignore
  dataSource = new MatTableDataSource<BookType>(this.types);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private bookService: BookLibraryService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.reloadData();
    this.bookService.getRatingList().subscribe(data => {
      this.ratings = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  reloadData(): void {
    this.ratingObs = this.bookService.getRatingList();
    this.bookService.getRatingList().subscribe(data => {
      this.ratings = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteRating(id: any): void {
    this.bookService.deleteRating(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.snackBar.open('Ocena została usunięta', '', { duration: 2000 });
  }

  openRatingDialog(): void {
    this.dialog.open(RatingDialogComponent)
      .afterClosed().subscribe(result => {
        this.refresh();
    });
  }

  private refresh(): void {
    this.bookService.getRatingList().subscribe(data => {
      this.ratings = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
