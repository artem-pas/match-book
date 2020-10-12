import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import { FeedPage } from './pages/feed/feed.page';
import { BookReviewPage } from './pages/book-review/book-review.page';
import { AddBookPage } from './pages/add-book/add-book.page';
import { ProfilePage } from './pages/profile/profile.page';


const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: FeedPage },
  { path: 'add-book', component: AddBookPage },
  { path: 'profile', component: ProfilePage },
  { path: 'books/:id', component: BookReviewPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
