import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    const api = "http://localhost:8091/user/get-all-user";
    return this.http.get<any[]>(api);
  }
  login(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/login-user";

    return this.http.post(apiUrl, user);
  }

  register(user: any): Observable<any> {
    const api = "http://localhost:8091/user/register-user";

    return this.http.post(api, user);
  }
}
