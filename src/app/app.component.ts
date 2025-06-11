import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./BooksReviews/Components/Header/Header.component";
import { FootterComponent } from "./BooksReviews/Components/Footter/Footter.component";
import { SearchComponent } from "./BooksReviews/Components/Search/Search.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FootterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksReviews';
}
