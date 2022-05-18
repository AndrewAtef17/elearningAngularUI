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
  grades :any[] = []
  gradess :any[] = []

  /*grades = [
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
  ]*/
  courses:any
  constructor(private GradesService:GradesService, private CourseService:CourseService) { 

  }

 async ngOnInit() {

    this.gradess.push(await this.GradesService.getMyGrades(this.UserID))
    this.gradess = this.gradess[0]
    console.log(this.gradess)

    for(let i = 0 ;i< this.gradess.length;i++){
    let course:any = await this.CourseService.getCourse(this.gradess[i].courseCode)
    this.grades.push({
      name: course.name,
      practical: this.gradess[i].Grades.Practical,
      yearwork: this.gradess[i].Grades.Yearwork,
      midterm: this.gradess[i].Grades.Midterm,
      quizzes: this.gradess[i].Grades.Quizzes,
      total: this.gradess[i].GPA
    })
  }
  }

}
