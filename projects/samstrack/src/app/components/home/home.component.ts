import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl("login");
  }
}
