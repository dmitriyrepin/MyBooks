import { TestBed } from '@angular/core/testing';

import { BookListDataSourceService } from './book-list-data-source.service';

describe('BookListDataSourceService', () => {
  let service: BookListDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
