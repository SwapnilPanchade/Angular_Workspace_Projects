import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private service: UserService) {}

  user = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    role: new FormControl(),
  });

  registerUser() {
    this.service.registerUser(this.user.value).subscribe((res) => {
      console.log(res);
    });
  }
}
