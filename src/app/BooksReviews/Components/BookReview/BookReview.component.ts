import { ChangeDetectionStrategy, Component, EventEmitter, Output, input, InputSignal, signal, OnInit, inject, WritableSignal } from '@angular/core';
import { ReviewService } from '@Services/Review.service';
import { ReviewModel } from '@Interfaces/ReviewModel.interface';
import { ModelResult } from '@Interfaces/ModelResult.interface';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './BookReview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookReviewComponent implements OnInit {
  bookId: InputSignal<number> = input.required<number>();
  reviews:WritableSignal<ReviewModel[]> = signal<ReviewModel[]>([]);
  @Output() close = new EventEmitter<void>();
  reviewService = inject(ReviewService);


  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewService.getReviewsByBook(this.bookId()).subscribe( (result: ModelResult<ReviewModel>) => {
      if (result.code === 200 && result.data) {
        console.log(result.data);
        this.reviews.set(result.data);
      } else {
        console.error('Error fetching reviews:', result.message);
      }
    });
  }

  closePopup() {
    this.close.emit();
  }
}
