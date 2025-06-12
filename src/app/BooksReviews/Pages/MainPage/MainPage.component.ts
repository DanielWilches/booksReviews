import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal, inject, Inject, effect } from '@angular/core';
import { SearchComponent } from "../../Components/Search/Search.component";
import { BookCardComponent } from "../../Components/BookCard/BookCard.component";
import { BookService } from '@Services/Book.service';
import { ModelResult } from '@Interfaces/ModelResult.interface';
import { BookModel } from '@Interfaces/BookModel.interface';
import { BookStateService } from '@Services/BookState.service';

@Component({
  selector: 'app-main-page',
  imports: [SearchComponent, BookCardComponent],
  templateUrl: './MainPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {


  books: WritableSignal<BookModel[]> = signal<BookModel[]>([]);
  bookService: BookService = inject(BookService);
  bookState: BookStateService = inject(BookStateService);
 syncBooks = effect(() => {
    this.books.set(this.bookState.books());
  });


  ngOnInit(): void {
    this.bookService.getBooks().subscribe((result: ModelResult<BookModel>) => {
      if (result.code == 200 && result.data) {
        this.bookState.setBooks(result.data);
      }
    });


  }



}
