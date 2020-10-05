import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import { FeedPage } from './pages/feed/feed.page';


const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: FeedPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
