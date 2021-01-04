import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {BookType} from '../../model/book-type';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BookLibraryService} from '../../service/book-library.service';
import {MatDialog} from '@angular/material/dialog';
import {TypeDialogComponent} from '../type-dialog/type-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-type',
  templateUrl: './book-type.component.html',
  styleUrls: ['./book-type.component.scss']
})
export class BookTypeComponent implements OnInit {

  typeObs: Observable<BookType[]>;
  types: BookType[];

  displayedColumns: string[] = ['id', 'name', 'delete'];

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
    this.bookService.getTypeList().subscribe(data => {
      this.types = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  reloadData(): void {
    this.typeObs = this.bookService.getTypeList();
    this.bookService.getTypeList().subscribe(data => {
      this.types = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteType(id: any): void {
    this.bookService.deleteType(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.snackBar.open('Gatunek został usunięty', '', { duration: 2000 });
  }

  openTypeDialog(): void {
    this.dialog.open(TypeDialogComponent)
      .afterClosed().subscribe(result => {
        this.refresh();
    });
  }

  private refresh(): void {
    this.bookService.getTypeList().subscribe(data => {
      this.types = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
