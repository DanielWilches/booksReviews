import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookModel } from '@Interfaces/BookModel.interface';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './BookCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  book = input.required<BookModel>();
 }
