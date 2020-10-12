import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

/* NgRx */
import { Store } from '@ngrx/store';
import { selectBookById } from 'src/app/store/selectors/book.selector';

/* Interfaces */
import { Book } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.page.html',
  styleUrls: ['./book-review.page.scss']
})
export class BookReviewPage implements OnInit {
  public book: Book = {} as Book;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ books: Book[] }>
  ) {
  }

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.params['id'];
    this.getBookByIdFromStore(id)
      .subscribe((book: Book) => this.book = book);
  }

  private getBookByIdFromStore(id: number): Observable<Book> {
    return this.store.select(selectBookById, id);
  }
}
