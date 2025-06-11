import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BookModel } from '@Interfaces/BookModel.interface';

import { BookStateService } from '@Services/BookState.service';
import { ModelResult } from '../../Interfaces/ModelResult.interface';
import { BookService } from '@Services/Book.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './Search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  bookState: BookStateService = inject(BookStateService);
  bookService: BookService = inject(BookService);
  searchQuery = signal<string>('');
  category = signal<string>("");


  onCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.category.set(value);
  }

  onInputBlur(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Input blurred with value:', value);

    console.log('Input blurred with value:', this.category());
    switch (this.category().toString()) {
      case 'title':
        console.log('To', value);
        this.bookService.GetBookByTitle(value).subscribe((result:ModelResult<BookModel>) => {
          if (result.code ==200 && result.data) {
            this.bookState.setBooks(result.data);
            console.log(result.data);
          }
        });
        break;
      case 'author': // Aquí parece que debería ser 'author'
      console.log('a', value);
        this.bookService.GetBookByauthor(value).subscribe((result:ModelResult<BookModel>) => {
          console.log('entro', value);
          if (result.code ==200 && result.data) {
            this.bookState.setBooks(result.data);
          }
        });
        break;
      case 'category': // Aquí par
      // ece que debería ser 'category'
      console.log('c', value);
        this.bookService.GetBookByCategory(value).subscribe((result:ModelResult<BookModel>) => {
          if (result.code ==200 && result.data) {
            this.bookState.setBooks(result.data);
          }
        });
        break;

    }
  }
}
