import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'Books',
    loadComponent: () => import('./BooksReviews/Pages/MainPage/MainPage.component')
    .then(m => m.MainPageComponent),
     children: [
        {
          path: 'BookMore/:id',
          loadComponent: () => import('./BooksReviews/Pages/BookMore/BookMore.component')
          .then(m => m.BookMoreComponent)
        },
        {
          path: 'User',
          loadComponent: () => import('./BooksReviews/Pages/BookUser/BookUser.component')
          .then(m => m.BookUserComponent)
        },
        {
          path:'BookReviews',
          loadComponent: () => import('./BooksReviews/Pages/BookReviews/BookReviews.component')
          .then(m => m.BookReviewsComponent)
        }
     ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'

  }

];
