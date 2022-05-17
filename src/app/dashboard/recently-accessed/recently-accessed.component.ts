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
  courses = [
    {
      img: "../../assets/u46.png",
      name: "User Interface Design",
    },
    {
      img: "../../assets/u46.png",
      name: "Safety Critical Systems",
    },
    {
      img: "../../assets/u46.png",
      name: "SW Maintainence",
    },
    {
      img: "../../assets/u46.png",
      name: "Cloud Computing",
    }
  ]
  constructor(private UserinfoService:UserinfoService, private CourseService:CourseService) {
   /*let recent:any  = UserinfoService.lastAccessedCourses 
   let courses:any
    for (let i =0 ;i<3 ;i++){
      courses.push(CourseService.getCourse(recent[i]))
    }
    this.courses = courses*/
   }

  ngOnInit(): void {
    //this.sortByDueDate()
    this.courses =this.courses.splice(0,3)
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
