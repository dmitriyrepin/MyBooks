import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Book, smapleBookData } from '../models/book';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { BookListSelectionService } from '../services/book-list-selection.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  imports: [MatButtonToggleModule, MatTableModule, BookDetailsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  constructor(private bookListSelection: BookListSelectionService) {
  }

  displayedColumns: string[] = ['author', 'title', 'series', 'bookNumber', 'narator'];

  books: Book[] = smapleBookData;

  onRowClick(book: Book) {
    this.bookListSelection.selectedBook.toggle(book);
  }
  isBookSelected(book: Book) {
    return this.bookListSelection.selectedBook.isSelected(book);
  }
}

