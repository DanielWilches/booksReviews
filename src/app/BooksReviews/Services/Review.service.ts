import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { environment } from '@Environments/environment';
import { Observable } from 'rxjs';
import { ModelResult } from '../Interfaces/ModelResult.interface';
import { ReviewModel } from '../Interfaces/ReviewModel.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  createReview(review: ReviewModel): Observable<ModelResult<ReviewModel>> {

    console.log('Creating review:', review);
    return this.http.post<ModelResult<ReviewModel>>(
      `${environment.BooksURL}/api/${environment.Version}/reviews`,
      review
    );
  }

  updateReview(review: ReviewModel): Observable<ModelResult<ReviewModel>> {
    return this.http.put<ModelResult<ReviewModel>>(
      `${environment.BooksURL}/api/${environment.Version}/reviews`,
      review
    );
  }

  getReviewsByUser(userId: number): Observable<ModelResult<ReviewModel>> {
    return this.http.get<ModelResult<ReviewModel>>(
      `${environment.BooksURL}/api/${environment.Version}/reviews/user/${userId}`
    );
  }

  getReviewsByBook(bookId: number): Observable<ModelResult<ReviewModel>> {
    return this.http.get<ModelResult<ReviewModel>>(
      `${environment.BooksURL}/api/${environment.Version}/reviews/book/${bookId}`
    );
  }
}
