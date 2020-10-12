import { createReducer, on } from '@ngrx/store';
import { setBooks, addBook, removeBook } from '../actions/book.actions';

/* Interfaces */
import { Book } from 'src/app/shared/interfaces';
 
export const initialState: Book[] = [] as Book[];
 
const _bookReducer = createReducer(
  initialState,
  on(setBooks, (state, { books }) => ([ ...books ])),
  on(addBook, (state, book) => ([ ...state, book ])),
  on(removeBook, (state, { id }) => state.filter(book => book.id !== id))
);
 
export function bookReducer(state, action) {
  return _bookReducer(state, action);
}
