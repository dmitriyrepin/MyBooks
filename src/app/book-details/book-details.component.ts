import { Component } from '@angular/core';
import { Book, EMPTY_BOOK } from '../models/book';
import { BookListSelectionService } from '../services/book-list-selection.service';
import { SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  book: Book = EMPTY_BOOK;
  constructor(private bookListSelection: BookListSelectionService) {
    this.bookListSelection.selectedBook.changed.subscribe((c: SelectionChange<Book>) => {
      if(c.source.hasValue()) {
        this.book = c.source.selected[0];
      } else {
        this.book = EMPTY_BOOK;
      }
    });
  }
}
