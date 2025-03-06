import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.css"],
})
export class AllUsersComponent implements OnInit {
  users: any[];
  constructor(private service: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      if (Array.isArray(res)) {
        this.users = res;
      } else {
        console.error("Expected array but not array ");
        this.users = [];
      }
      console.log("API Response:", res);
      console.log("Response Type:", typeof res);
    });
  }
}
