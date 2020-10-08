import { createAction, props } from '@ngrx/store';

/* Interfaces */
import { Book } from 'src/app/shared/interfaces';

export const setBooks = createAction(
    'Set books',
    props<{ books: Book[] }>()
);
export const addBook = createAction(
    'Add book',
    props<Book>()
);
export const removeBook = createAction(
    'Remove book',
    props<{ id: number }>()
);