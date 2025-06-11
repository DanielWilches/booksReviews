import { ChangeDetectionStrategy, Component, computed, inject, input, InputSignal, WritableSignal, Signal, Output, EventEmitter } from '@angular/core';
import { BookStateService } from '@Services/BookState.service';
import { BookModel } from '@Interfaces/BookModel.interface';

@Component({
  selector: 'app-book-more-card',
  imports: [],
  templateUrl: './BookMoreCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookMoreCardComponent {

  BookState = inject(BookStateService);
  BookId: InputSignal<number> = input.required<number>();
  book: Signal<BookModel> = computed(() => this.BookState.GetBookId(this.BookId()) || {} as BookModel);

  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}


