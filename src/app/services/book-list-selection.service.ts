import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class BookListSelectionService {
  selectedBook = new SelectionModel<Book>(false /*allowMultiSelect*/, undefined /*initialSelection*/);
  // constructor() { }
}
