import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserPages = true;
  page = 'login'
  code = ''
  UserID:number = -1
  currentDate:Date = new Date()
  onTakeData(message:string){
    this.page = message
  }
 onTakeUserID(message:any){
   if(typeof (message) === 'string'){
     this.page = message
   }
   else{
  this.page = message.page
  this.UserID = message.userID
   }
 }
  onCourseClick(message:any){
    this.page = message.page
    this.code = message.code
  }

  constructor(public location: Location){
    const loc = this.location.path()
    if(loc === '/dashboard'){
      this.page = 'dashboard'
    }
    else if (loc === '/login'){
      this.page = 'login'
    }
    else if (loc === '/register'){
      this.page = 'register'
    }
    else if (loc === '/allcourses'){
      this.page = 'allcourses'
    }
    else if (loc === '/mycourses'){
      this.page = 'mycourses'
    }
    else if (loc === '/grades'){
      this.page = 'grades'
    }
    else if (loc === '/teacher'){
      this.page = 'teacher'
      this.UserPages = false
    }
    else if (loc === '/admin'){
      this.page = 'admin'
      this.UserPages = false
    }
    else if (loc === '/coursematerial'){
      this.page = 'coursematerial'
    }
    else if (loc === '/courseinfo'){
      this.page = 'courseinfo'
    }
  }
}