import { Component, Input, OnInit } from '@angular/core';
import { GradesService } from '../grades.service';
import { CourseService } from 'src/app/course.service'
import { UserinfoService } from '../userinfo.service';
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  @Input()
  UserID!: number;
  img = "../../assets/grades.jpg"
  grades = [
    {
      name: "User Interface Design",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  '--',
    },
    {
      name: "Cloud Computing",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  '--',
    },
    {
      name: "SW Maintainence",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  '--',
    },
    {
      name: "Saftey and critical systems",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  '--',
    },
    {
      name: "Big Data",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  '--',
    },
  ]
  courses:any
  constructor(private GradesService:GradesService) { 

  }

 async ngOnInit() {
      /*  const userID:any = UserinfoService.userID
    const courses:any = CourseService.getMyCurrentCourses(userID)
    for(let i = 0 ; i< courses.length ; i++){
      this.courses.push(courses[i].code)
    }
    GradesService.getGrades(this.courses,userID)
*/
  }

}
