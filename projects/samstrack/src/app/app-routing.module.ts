import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'faculty-dashboard',
    component:FacultyDashboardComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'all-users',
    component:AllUsersComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
