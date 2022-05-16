import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserPages = true;
  page = 'login'
  code = ''
  currentDate:Date = new Date()
  onTakeData(message:string){
    this.page = message
  }
  onCourseClick(message:any){
    this.page = message.page
    this.code = message.code
  }
}