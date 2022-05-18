import { Component, Input, OnInit } from '@angular/core';
import { UserinfoService } from '../userinfo.service';
import { CourseService } from '../course.service';
import { GradesService } from '../grades.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input()
  UserID!: number;
  teacher:any
  Code : any
  Ann : string = " "
  Weekno! : number
  GPA! : number
  Prac! : number
  Mid! : number
  YearWork! : number
  Quiz! : number
  MaterialName : string = " "
  MaterialLink : string = " "
  constructor(private UserinfoService:UserinfoService , private CourseService:CourseService , private GradesService:GradesService) { }

  async ngOnInit() {
    this.teacher = await this.UserinfoService.getUser(this.UserID)
    this.teacher.courses = this.teacher.currentCourses.length
    console.log(this.teacher)
  }

  async onClicked(type:string){
    if(type === "AddAnn"){
      await this.CourseService.addAnnoucments(this.Code ,this.Ann)
    }else if(type === "AddMaterial"){
      await this.CourseService.addMaterial(this.Code , this.Weekno , this.MaterialName , this.MaterialLink)
    }else if(type === 'AddGrade'){
      console.log(this.Code)
      await this.GradesService.setGrades(this.Code , this.UserID , this.GPA,
         {
           Practical : this.Prac,
           Yearwork : this.YearWork,
           Midterm: this.Mid,
           Quizzes : this.Quiz
         })
    }else{
      alert("Something Wrong Happend")
    }
  }
}
