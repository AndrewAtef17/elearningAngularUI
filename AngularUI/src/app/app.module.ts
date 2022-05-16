import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInformationComponent } from './dashboard/user-information/user-information.component';
import { AnnouncementsComponent } from './dashboard/announcements/announcements.component';
import { RecentlyAccessedComponent } from './dashboard/recently-accessed/recently-accessed.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { GradesComponent } from './grades/grades.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserInformationComponent,
    AnnouncementsComponent,
    RecentlyAccessedComponent,
    AllCoursesComponent,
    MyCoursesComponent,
    GradesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
