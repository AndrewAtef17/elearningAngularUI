import { Component, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/userinfo.service';
import { CourseService } from 'src/app/course.service'
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  //get Courses from courseID
  //get Announcement of each course
  //add it in array announcements
  annoucements =[
    {
      courseName: "User Interface Design",
      announcement: "Project phase 1 should be delivered by 9/4/2022"
    },
    {
      courseName: "Software Maintenance",
      announcement: "The next lecture will be online on Thursday 2:00pm"
    }
  ]
  constructor(private UserinfoService:UserinfoService, private CourseService:CourseService) {
   /* const userID:any = UserinfoService.userID
    const myCourses:any = CourseService.getMyCurrentCourses(userID)
    let announce:any
    for(let i = 0 ; i < myCourses.length;i++){
      for(let j = 0 ; j< myCourses[i].annoucements.length;j++)
      announce.push({courseName: myCourses[i].name, announcement: myCourses[i].annoucements[j]})
    }
    this.annoucements = announce*/
    }

  ngOnInit(): void {
  }

}
