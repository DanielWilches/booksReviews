import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal, inject, Inject } from '@angular/core';
import { SearchComponent } from "../../Components/Search/Search.component";
import { BookCardComponent } from "../../Components/BookCard/BookCard.component";
import { BookService } from '@Services/Book.service';
import { ModelResult } from '@Interfaces/ModelResult.interface';
import { BookModel } from '@Interfaces/BookModel.interface';

@Component({
  selector: 'app-main-page',
  imports: [SearchComponent, BookCardComponent],
  templateUrl: './MainPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit{
   books: WritableSignal<BookModel[]> = signal<BookModel[]>([]);
  bookService = inject(BookService);

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((result: ModelResult<BookModel>) => {
      console.log(result);
      if (result.code == 200 && result.data) {
        this.books.set(result.data);
      }
    });
  }



 }
