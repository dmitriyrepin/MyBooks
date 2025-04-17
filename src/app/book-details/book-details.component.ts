import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  book: Book = {
    coAuthors: [],
    author: 'Main Author',
    title: 'Book Title',
    series: 'Book series (if any)',
    narator: 'Book Reader'
  };
}
