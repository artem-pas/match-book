import { createSelector } from '@ngrx/store';

/* Interfaces */
import { Book } from 'src/app/shared/interfaces';

export interface BookState {
  books: Book[];
}

export const selectAllBooks = (state: BookState) => state.books;

export const selectBookById = createSelector(
  selectAllBooks,
  (state: Book[], id: number) => {
    return state.find((book: Book) => book.id === id);
  }
);
