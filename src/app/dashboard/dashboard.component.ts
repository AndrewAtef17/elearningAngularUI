import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
  }
  @Output() courseClick: EventEmitter<any> = new EventEmitter<any>();
  onCourseClick(event:any){
    this.courseClick.emit(event);
  }
}
