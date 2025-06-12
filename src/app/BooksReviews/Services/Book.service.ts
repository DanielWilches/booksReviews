import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@Environments/environment';
import { Observable } from 'rxjs';

import { ModelResult } from '@Interfaces/ModelResult.interface';
import { BookModel } from '@Interfaces/BookModel.interface';


@Injectable({
  providedIn: 'root'
})
export class BookService {


  http = inject(HttpClient);

  constructor() { }

  getBooks(): Observable<ModelResult<BookModel>> {
    return this.http.get<ModelResult<BookModel>>(
      `${environment.BooksURL}/api/${environment.Version}/${environment.BooksApi}`
    );
  }

  getBookById(id: string): Observable<ModelResult<BookModel>> {
    return this.http.get<ModelResult<BookModel>>(
      `${environment.BooksURL}/api/${environment.Version}/${environment.BooksApi}/${id}`
    );
  }

  GetBookByauthor(author: string): Observable<ModelResult<BookModel>> {
    return this.http.get<ModelResult<BookModel>>(
      `${environment.BooksURL}/api/${environment.Version}/${environment.BooksApi}/author/${author}`
    );
  }

  GetBookByTitle(title: string): Observable<ModelResult<BookModel>> {
    return this.http.get<ModelResult<BookModel>>(
      `${environment.BooksURL}/api/${environment.Version}/${environment.BooksApi}/title/${title}`
    );
  }

  GetBookByCategory(category: string): Observable<ModelResult<BookModel>> {
    return this.http.get<ModelResult<BookModel>>(
      `${environment.BooksURL}/api/${environment.Version}/${environment.BooksApi}/category/${category}`
    );
  }

}
