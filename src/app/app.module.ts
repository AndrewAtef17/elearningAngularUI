import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

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
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseMaterialsComponent } from './course-materials/course-materials.component';
import { Router, RouterModule,Routes } from '@angular/router';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'all-courses', component: AllCoursesComponent},
  {path: 'my-courses', component: MyCoursesComponent},
  {path: 'course-info', component: CourseInfoComponent},
  {path: 'course-materials', component: CourseMaterialsComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'header', component: HeaderComponent},
]
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
    LoginComponent,
    TeacherComponent,
    AdminComponent,
    CourseInfoComponent,
    CourseMaterialsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
