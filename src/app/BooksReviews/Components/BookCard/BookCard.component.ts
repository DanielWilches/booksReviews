import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, WritableSignal } from '@angular/core';
import { BookModel } from '@Interfaces/BookModel.interface';
import { BookMoreCardComponent } from "../BookMoreCard/BookMoreCard.component";


@Component({
  selector: 'app-book-card',
  imports: [BookMoreCardComponent],
  templateUrl: './BookCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent  {
  book= input<BookModel>();
  showMore: WritableSignal<boolean> = signal<boolean>(false);
  SelectBookId: WritableSignal<number> = signal<number>(0);

  ViewDatails(BookId: number) {
    this.showMore.set(true);
    this.SelectBookId.set(BookId);
  }

  CloseBookMoreCard(){
    this.showMore.set(false);
    this.SelectBookId.set(0);
  }
 }
