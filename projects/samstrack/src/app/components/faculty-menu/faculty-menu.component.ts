import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-menu',
  templateUrl: './faculty-menu.component.html',
  styleUrls: ['./faculty-menu.component.css']
})
export class FacultyMenuComponent {
  constructor(private service : UserService,private route :Router){}
  logout(){
  this.route.navigateByUrl('/login');
  }
}
