import { Injectable, signal, WritableSignal } from '@angular/core';
import { BookModel } from '@Interfaces/BookModel.interface';

@Injectable({
  providedIn: 'root'
})
export class BookStateService {
  books: WritableSignal<BookModel[]> = signal<BookModel[]>([]);

  GetBookId(id: number): BookModel | undefined {
    return this.books() .find(book => book.id === id);
  }

  setBooks(newBooks: BookModel[]) {
    this.books.set(newBooks);
  }

  updateBooks(updater: (books: BookModel[]) => BookModel[]) {
    this.books.update(updater);
  }
}
