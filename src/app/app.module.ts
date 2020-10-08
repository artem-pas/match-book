import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

/* NgRx */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/reducers/book.reducer';

import { AppRoutingModule } from './app-routing.module';

/* Pages */
import { FeedPage } from './pages/feed/feed.page';
import { BookReviewPage } from './pages/book-review/book-review.page';

/* Components */
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

const components = [
  BookCardComponent,
  SearchComponent,
  MenuComponent,
  MenuItemComponent
];

const pages = [
  FeedPage,
  BookReviewPage,
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pages,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: bookReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
