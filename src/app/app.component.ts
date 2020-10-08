import { Component } from '@angular/core';

/* NgRx */
import { Store } from '@ngrx/store';
import { setBooks } from 'src/app/store/actions/book.actions';

/* Interfaces */
import { Book } from 'src/app/shared/interfaces';
import { books } from 'src/app/shared/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public books: Book[] = books;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setBooks({ books }));
  }
}
