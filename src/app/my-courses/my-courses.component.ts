import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserinfoService } from 'src/app/userinfo.service';
import { CourseService } from 'src/app/course.service';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  @Input()
  UserID!: number;
  img = "../../assets/u46.png"

  courses:any[] = []
  coursesCode:any[] = []
  constructor(private UserinfoService:UserinfoService, private CourseService:CourseService) {
    }

  async ngOnInit() {
    this.coursesCode= await this.UserinfoService.getMyCurrentCourses(this.UserID)
    for (let i = 0 ;i<this.coursesCode.length;i++){
      this.courses.push(await this.CourseService.getCourse(this.coursesCode[i]))
    }
  }
  @Output() courseClick: EventEmitter<any> = new EventEmitter<any>();
  onCourseClick(event:any){
    this.courseClick.emit(event);
  }
}
