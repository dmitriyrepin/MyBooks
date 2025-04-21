import { Component, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Book, smapleBookData } from '../../models/book';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { BookListSelectionService } from '../../services/book-list-selection.service';
import { BookListDataSourceService } from '../../services/book-list-data-source.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormField, MatHint, MatLabel, MatOption, MatSelect } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { IdName } from '../../models/IdName';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-overview',
  imports: [BookDetailsComponent,
    CommonModule, FormsModule, MatButtonToggleModule, MatTableModule, MatIcon, MatHint,
    MatSortModule, MatFormField, MatSelect, MatOption, MatInputModule, MatLabel],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {

  books: Book[] = [];
  displayedBooks: Book[] = [];

  filterOptions: IdName[] = [
    { id: 'author', name: 'Author' },
    { id: 'title', name: 'Title' },
    { id: 'series', name: 'Series' },
    { id: 'sarator', name: 'Narator' }
  ];
  filterBy: string = this.filterOptions[0].id;
  filterString: string = '';

  displayedColumns: string[] = ['author', 'title', 'series', 'bookNumber', 'narator'];

  constructor(
    private bookListSelection: BookListSelectionService,
    private bookDataSource: BookListDataSourceService) {
  }

  ngOnInit(): void {
    this.books = this.bookDataSource.getData("mock-data");
    // Shallow copy
    this.displayedBooks = this.books.slice();
  }

  @ViewChild(MatTable) table!: MatTable<Book>; // Use the definite assignment assertion (!): sort will be assigned later.
  @ViewChild(MatSort) sort!: MatSort; // Use the definite assignment assertion (!): sort will be assigned later.
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(
      // When supplied, a custom handler for emitted events.
      (value: Book) => { this.onSortData(); },
      // error When supplied, a custom handler for an error notification from this emitter.
      (error: any) => { },
      // When supplied, a custom handler for a completion notification from this
      () => { })
  }

  refreshTable() {
    if (this.table != undefined) {
      this.table.renderRows();
    }
  }

  onRowClick(book: Book) {
    this.bookListSelection.selectedBook.toggle(book);
  }

  onHeaderClick(header: string) {
    console.log(`onHeaderClick ${header}`);
    this.filterBy = header;
  }

  isBookSelected(book: Book) {
    return this.bookListSelection.selectedBook.isSelected(book);
  }

  applyFilter(event: Event) {
    const filter = this.filterString.toLowerCase();
    let filteredBooks = this.books.slice();
    this.displayedBooks = filteredBooks.filter((b: Book) => {
      let filteredText: String;
      if (this.filterBy === 'author') {
        filteredText = b.author.toLowerCase();
      } else if (this.filterBy === 'title') {
        filteredText = b.title.toLowerCase();
      } else if (this.filterBy === 'series') {
        filteredText = b.series.toLowerCase();
      } else if (this.filterBy === 'narator') {
        filteredText = b.narator.toLowerCase();
      } else {
        return true;
      };

      return filteredText.includes(filter);
    });
    this.refreshTable();

    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortByAuthor(a: Book, b: Book, smaller: number): number {
    // First, sort by the author (ascending or descending)
    if (a.author < b.author) return smaller;
    if (a.author > b.author) return -smaller;
    // Then, sort by the book series and book number (accouning for undefined book #)
    if (a.series < b.series) return -1;
    if (a.series > b.series) return 1;
    if ((a.bookNumber ?? 0) < (b.bookNumber ?? 0)) return -1;
    if ((a.bookNumber ?? 0) > (b.bookNumber ?? 0)) return 1;
    // Finally, sort by the book Title
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }


  onSortData() {
    console.log(`Sort requested`);

    if (!this.sort.active || this.sort.direction === "") {
      return;
    }

    this.displayedBooks.sort((a, b) => {
      console.log(`Sorting: ${this.sort.active} ${this.sort.direction}`);
      const smaller = (this.sort.direction === "asc") ? -1 : 1;
      switch (this.sort.active) {
        case "author":
          return this.sortByAuthor(a, b, smaller);
        case "narator":
          // First, sort by the narator
          if (a.narator < b.narator) return smaller;
          if (a.narator > b.narator) return -smaller;
          // Then, sort by the author
          return this.sortByAuthor(a, b, -1);
        default:
          return 0;
      }
    });

    this.refreshTable();
  }
}

