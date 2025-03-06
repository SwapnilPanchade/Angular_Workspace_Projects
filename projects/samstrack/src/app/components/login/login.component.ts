import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:UserService,private router:Router){}

  user={
    username:'',
    password :''
  }

  login(){
    this.service.login(this.user).subscribe((res)=>{
      console.log(res);
      if(res != null){
        if(res.role=='admin'){
          this.router.navigateByUrl('admin-dashboard')
        }else{
          this.router.navigateByUrl('faculty-dashborad')
        }
      }
    })
  }

}
