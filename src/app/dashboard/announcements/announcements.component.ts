import { Component, Input, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/userinfo.service';
import { CourseService } from 'src/app/course.service'
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  @Input()
  UserID!: number;
  //get Courses from courseID
  //get Announcement of each course
  //add it in array announcements
  announcements:any
  constructor(private UserinfoService:UserinfoService, private CourseService:CourseService) {
  
    }

 async ngOnInit() {
    const myCoursesCodes:any = await this.UserinfoService.getMyCurrentCourses(this.UserID)
    let myCourses:any[]=[]
    for (let i = 0 ;i<myCoursesCodes.length;i++){
      myCourses.push(await this.CourseService.getCourse(myCoursesCodes[i]))
    }
    console.log(myCourses)
    let announce:any[] = []
    for(let i = 0 ; i < myCourses.length;i++){
      if(myCourses[i].announcements !== undefined){
      for(let j = 0 ; j< myCourses[i].announcements.length;j++)
      announce.push({courseName: myCourses[i].name, announcements: myCourses[i].announcements[j]})
    }
  }
  console.log(announce)

    this.announcements = announce
  }
}
