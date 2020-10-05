import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedPage } from './pages/feed/feed.page';
import { BookCardComponent } from './components/book-card/book-card.component';

const components = [
  BookCardComponent
];

const pages = [
  FeedPage
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pages,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
