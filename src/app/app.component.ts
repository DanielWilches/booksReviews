import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./BooksReviews/Components/Header/Header.component";
import { FootterComponent } from "./BooksReviews/Components/Footter/Footter.component";
import { BookUserComponent } from './BooksReviews/Pages/BookUser/BookUser.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FootterComponent, BookUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksReviews';


   showAuthModal = signal(false);

  openAuthModal = () => {
    this.showAuthModal.set(true);
  };

  closeAuthModal = () => {
    this.showAuthModal.set(false);
  };
}
