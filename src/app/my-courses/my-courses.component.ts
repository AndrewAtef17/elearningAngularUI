import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserinfoService } from 'src/app/userinfo.service';
import { CourseService } from 'src/app/course.service';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses = [
    {
      img: "../../assets/u46.png",
      name: "User Interface Design",
      code: 'SWE490'
    },
    {
      img: "../../assets/u46.png",
      name: "Cloud Computing",
      code: 'SWE390'
    },
    {
      img: "../../assets/u46.png",
      name: "SW Maintainence",
      code: 'SWE380'
    },
    {
      img: "../../assets/u46.png",
      name: "Safety Critical Systems",
      code: 'SWE330'
    },
    {
      img: "../../assets/u46.png",
      name: "Big Data",
      code: 'SWE290'
    }
  ]
  constructor(private UserinfoService:UserinfoService, private CourseService:CourseService) {
    /*const userID:any = UserinfoService.userID
    const courses:any = CourseService.getMyCurrentCourses(userID)
    this.courses = courses*/
    }

  ngOnInit(): void {
  }
  @Output() courseClick: EventEmitter<any> = new EventEmitter<any>();
  onCourseClick(event:any){
    this.courseClick.emit(event);
  }
}
