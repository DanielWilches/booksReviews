import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, WritableSignal } from '@angular/core';
import { BookModel } from '@Interfaces/BookModel.interface';
import { BookMoreCardComponent } from "../BookMoreCard/BookMoreCard.component";
import { BookReviewComponent } from "../BookReview/BookReview.component";


@Component({
  selector: 'app-book-card',
  imports: [BookMoreCardComponent, BookReviewComponent],
  templateUrl: './BookCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent  {
  book= input<BookModel>();
  showMoreDetails: WritableSignal<boolean> = signal<boolean>(false);
  showMoreReviews: WritableSignal<boolean> = signal<boolean>(false);
  SelectBookId: WritableSignal<number> = signal<number>(0);

  ViewDatails(BookId: number) {
    this.showMoreDetails.set(true);
    this.SelectBookId.set(BookId);
  }


   ViewReviews(BookId: number) {
    this.showMoreReviews.set(true);
    this.SelectBookId.set(BookId);
  }

  CloseBookMoreCard(){
    this.showMoreDetails.set(false);
    this.SelectBookId.set(0);
  }
 }
