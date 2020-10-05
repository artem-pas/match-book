import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/shared/interfaces';
import { books } from 'src/app/shared/mock-data';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public books: Book[] = books;

  constructor() { }

  ngOnInit(): void {
  }

}
