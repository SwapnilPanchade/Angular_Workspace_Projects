import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/login-user";

    return this.http.post(apiUrl, user);
  }

  register(user: any): Observable<any> {
    const api = "http://localhost:8091/user/register-user";

    return this.http.post(api, user);
  }
}
