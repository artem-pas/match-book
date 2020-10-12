import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* NgRx */
import { Store } from '@ngrx/store';

/* Interfaces */
import { Book } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public books$: Observable<Book[]>;

  constructor(
    private store: Store<{ books: Book[] }>
  ) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books');
  }

}
