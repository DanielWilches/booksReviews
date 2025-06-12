import { ChangeDetectionStrategy, Component, inject, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { ModelResult } from '@Interfaces/ModelResult.interface';
import { ReviewModel } from '@Interfaces/ReviewModel.interface';
import { ReviewService } from '@Services/Review.service';

@Component({
  selector: 'app-add-review',
  standalone: true,
  templateUrl: './AddReview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReviewComponent {
  reiewModel: ReviewModel | undefined;
  reviewText:WritableSignal<string> = signal('');
  rating: WritableSignal<number> = signal(0);
  BookId: InputSignal<number> = input.required<number>();

  ReviewService = inject(ReviewService);


  setRating(star: number)    {
    this.rating.set(star);
  }

  addReview() {
    console.log('Agregando reseña...');

    if (this.reviewText().trim() === '' || this.rating() <= 0) {
      console.error('Por favor, completa todos los campos.');
      return;
    }
    this.reiewModel = {
      reviewText: this.reviewText().toString(),
      rating: (this.rating() as number),
      createdDate: new Date(),
      modifiedDate: new Date(),
      bookId: this.BookId(), // Aquí deberías asignar el ID del libro correspondiente
      userId: 10
    };

    this.ReviewService.createReview(this.reiewModel).subscribe( (result: ModelResult<ReviewModel>) => {
      console.log('Reseña agregada exitosamente:', result.data);
      if (result.code === 200 && result.data) {
        console.log('Reseña agregada exitosamente:', result.data);
      } else {
        console.error('Error al agregar la reseña:', result.message);
      }

    });



    const review = {
      text: this.reviewText(),
      rating: this.rating(),
    };

    this.ResertProperties();
  }


  ResertProperties() {
    this.reviewText.set('');
    this.rating.set(0);
  }
}
