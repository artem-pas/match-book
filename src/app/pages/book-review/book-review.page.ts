import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

/* NgRx */
import { Store } from '@ngrx/store';
import { selectBookById } from 'src/app/store/selectors/book.selectors';

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

  public get username(): string {
    return this.book.username;
  }

  public get name(): string {
    return this.book.name;
  }

  public get author(): string {
    return this.book.author;
  }

  public get price(): number {
    return this.book.price;
  }

  public get review(): string {
    return this.book.review;
  }

  public get userAvatarSrc(): string {
    return this.book.userAvatarSrc;
  }

  public get bigImageSrc(): string {
    return this.book.bigImageSrc;
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
