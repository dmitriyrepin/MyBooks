import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookListDataSourceService {

  getData(fileName: string): Book[] {
    return [
        { author: "Brandon Sanderson", coAuthors: [], title: "Legion", series: "Legion", bookNumber: 1, narator: "Oliver Wyman" },
        { author: "Brandon Sanderson", coAuthors: [], title: "The Final Empire", series: "Mistborn", bookNumber: 1, narator: "Michael Kramer" },
        { author: "Brandon Sanderson", coAuthors: [], title: "The Well of Ascension", series: "Mistborn", bookNumber: 2, narator: "Michael Kramer" },
        { author: "Brandon Sanderson", coAuthors: [], title: "The Hero of Ages", series: "Mistborn", bookNumber: 3, narator: "Michael Kramer" },
    
        { author: "Andy Weir", coAuthors: [], title: "Artemis", series: "", bookNumber: undefined, narator: "Rosario Dawson" },
        { author: "Andy Weir", coAuthors: [], title: "James Moriarty, Consulting Criminal", series: "", bookNumber: undefined, narator: "Graeme Malcolm" },
        { author: "Andy Weir", coAuthors: [], title: "The Martian", series: "", bookNumber: undefined, narator: "R.C.Bray" },
    
        { author: "Jim Butcher", coAuthors: [], title: "Storm Front", series: "The Dresden Files", bookNumber: 1, narator: "James Marsters" },
        { author: "Jim Butcher", coAuthors: [], title: "Death Masks", series: "The Dresden Files", bookNumber: 5, narator: "James Marsters" },
        { author: "Jim Butcher", coAuthors: [], title: "Blood Rites", series: "The Dresden Files", bookNumber: 6, narator: "James Marsters" },
        { author: "Jim Butcher", coAuthors: [], title: "Dead Beat  ", series: "The Dresden Files", bookNumber: 7, narator: "James Marsters" },
    ];
  }
}
