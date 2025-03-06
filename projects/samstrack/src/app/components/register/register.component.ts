import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private service: UserService,
    private http: HttpClient
  ) {}
  user = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    role: new FormControl(),
  });
  register() {
    this.service.register(this.user.value).subscribe((res) => {
      alert(res);
      this.router.navigateByUrl("/register");
    });
  }
}
