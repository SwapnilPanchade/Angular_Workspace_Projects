import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminMenuComponent } from "./components/admin-menu/admin-menu.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { AllUsersComponent } from "./components/all-users/all-users.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { AddSubjectComponent } from "./components/add-subject/add-subject.component";
import { AllSubjectsComponent } from "./components/all-subjects/all-subjects.component";
import { EditSubjectComponent } from "./components/edit-subject/edit-subject.component";
import { ViewAllAttendanceComponent } from "./components/view-all-attendance/view-all-attendance.component";
import { FacultyDashboardComponent } from "./components/faculty-dashboard/faculty-dashboard.component";
import { FacultyMenuComponent } from "./components/faculty-menu/faculty-menu.component";
import { AddStudentComponent } from "./components/add-student/add-student.component";
import { AllStudentsComponent } from "./components/all-students/all-students.component";
import { TakeAttendanceComponent } from "./components/take-attendance/take-attendance.component";
import { VeiwAttendanceComponent } from "./components/veiw-attendance/veiw-attendance.component";
import { RouterLink } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormComponent } from "projects/second/src/app/components/reactive-form/reactive-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AddUserComponent,
    AllUsersComponent,
    EditUserComponent,
    AddSubjectComponent,
    AllSubjectsComponent,
    EditSubjectComponent,
    ViewAllAttendanceComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    AddStudentComponent,
    AllStudentsComponent,
    TakeAttendanceComponent,
    VeiwAttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
