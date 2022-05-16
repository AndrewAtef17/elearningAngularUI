import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserPages = true;
  page = 'allcourses'
  onTakeData(message:string){
    this.page = message
  }
}