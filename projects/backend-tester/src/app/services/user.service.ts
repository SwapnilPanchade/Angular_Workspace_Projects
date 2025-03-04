import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const api = 'http://localhost:8091/user/register-user';
    return this.http.post<any>(api, user);
  }
}
