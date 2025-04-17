import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Book, smapleBookData } from '../models/book';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-overview',
  imports: [MatButtonToggleModule, MatTableModule, BookDetailsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {

  displayedColumns: string[] = ['author', 'title', 'series', 'bookNumber', 'narator'];

  books: Book[] = smapleBookData;

  // const initialSelection = [];
  // const allowMultiSelect = true;
  selection = new SelectionModel<Book>(false /*allowMultiSelect*/, [] /*initialSelection*/);

  onRowClick(book: Book) {
    this.selection.toggle(book);
  }

  isBookSelected(book: Book) {
    return this.selection.isSelected(book);
  }

  
}

