import { TestBed } from '@angular/core/testing';

import { BookListSelectionService } from './book-list-selection.service';

describe('BookListSelectionService', () => {
  let service: BookListSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
