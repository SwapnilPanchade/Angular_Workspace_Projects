import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:UserService) {

  }

  user = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })

  loginUser(){
    this.service.loginUser(this.user.value).subscribe((res) => {
      console.log(res);

    })
  }
}
