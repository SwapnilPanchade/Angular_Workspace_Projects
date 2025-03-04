import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const apiUrl = 'http://localhost:8091/user/register-user';
    return this.http.post<any>(apiUrl, user);
  }

  loginUser(user: any): Observable<any> {
    const loginUrl = 'http://localhost:8091/user/login-user';
    return this.http.post<any>(loginUrl, user);
  }
}
