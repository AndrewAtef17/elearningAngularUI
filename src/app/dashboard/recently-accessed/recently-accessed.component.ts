import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UserinfoService } from 'src/app/userinfo.service';
import { CourseService } from 'src/app/course.service';
@Component({
  selector: 'app-recently-accessed',
  templateUrl: './recently-accessed.component.html',
  styleUrls: ['./recently-accessed.component.css']
})
export class RecentlyAccessedComponent implements OnInit {
  @Input()
  UserID!: number;
  img=  "../../assets/u46.png"
  courses :any[] = []
  coursesCode: any[] = []
  constructor(private UserinfoService:UserinfoService, private CourseService:CourseService) {
   /*let recent:any  = UserinfoService.lastAccessedCourses 
   let courses:any
    for (let i =0 ;i<3 ;i++){
      courses.push(CourseService.getCourse(recent[i]))
    }
    this.courses = courses*/
   }

 async ngOnInit() {
    //this.sortByDueDate()
    this.coursesCode= await this.UserinfoService.getRecentlyAccesedCoursesOnly(this.UserID)
    for (let i = 0 ;i<this.coursesCode.length;i++){
      this.courses.push(await this.CourseService.getCourse(this.coursesCode[i]))
  }
}
/*public sortByDueDate(): void {
    this.courses.sort((a: any, b: any) => {
        return a.LastAccessed.getTime() - b.LastAccessed.getTime();

    });
}*/
 @Output() courseClick: EventEmitter<any> = new EventEmitter<any>();
  onCourseClick(event:any){
    this.courseClick.emit(event);
  }
}
