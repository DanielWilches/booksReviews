import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { environment } from '@Environments/environment';
import { Observable } from 'rxjs';
import { ModelResult } from '@Interfaces/ModelResult.interface';
import { UserModel } from '@Interfaces/UserModel.interfaces';
import { RegisterModel } from '@Interfaces/RegisterModel.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  createUser(user: RegisterModel): Observable<ModelResult<UserModel>> {
    return this.http.post<ModelResult<UserModel>>(
      `${environment.BooksURL}/api/${environment.Version}/User/Create`,
      user
    );
  }

  login(credentials: { userName: string; password: string }): Observable<ModelResult<UserModel>> {
    return this.http.post<ModelResult<UserModel>>(
      `${environment.BooksURL}/api/${environment.Version}/User/login`,
      credentials
    );
  }
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Devuelve true si hay un token, false si no
  }

  logout(token: string): Observable<ModelResult<any>> {
    localStorage.setItem('token', token);
    return this.http.post<ModelResult<any>>(
      `${environment.BooksURL}/api/${environment.Version}/User/logout`,
      { token }
    );
  }
}
