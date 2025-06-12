import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'Books',
    loadComponent: () => import('./BooksReviews/Pages/MainPage/MainPage.component')
    .then(m => m.MainPageComponent),
     children: [

        {
          path: 'User',
          loadComponent: () => import('./BooksReviews/Pages/BookUser/BookUser.component')
          .then(m => m.BookUserComponent)
        }
     ]
  },
  {
    path: '**',
    redirectTo: 'Books'
  }

];
