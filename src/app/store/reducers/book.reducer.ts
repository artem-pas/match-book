import { createReducer, on } from '@ngrx/store';
import * as BookActions from '../actions/book.actions';

/* Interfaces */
import { Book } from 'src/app/shared/interfaces';
 
export const initialState: Book[] = [] as Book[];
 
const _bookReducer = createReducer(
  initialState,
  on(BookActions.setBooks, (state, { books }) => ([ ...books ])),
  on(BookActions.addBook, (state, book) => ([ ...state, book ])),
  on(BookActions.removeBook, (state, { id }) => state.filter(book => book.id !== id))
);
 
export function bookReducer(state, action) {
  return _bookReducer(state, action);
}
