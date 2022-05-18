import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseService } from 'src/app/course.service'
import { UserinfoService } from 'src/app/userinfo.service';
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  @Input()
  UserID!: number;
  @Input() code:any
  course:any
  prereq :any[]= []
  blocked = false
  reason = "You Cant Enroll in this Course."
  constructor(private CourseService:CourseService, private UserinfoService:UserinfoService) {
   }

 async ngOnInit() {
    this.course= await this.CourseService.getCourse(this.code)
  if(this.course.prerequisites !== undefined){
    for (let i = 0 ;i<this.course.prerequisites.length;i++){
      this.prereq.push(await this.CourseService.getCourse(this.course.prerequisites[i])) 
    }
  }
    let finshed = await this.UserinfoService.getMyFinshedCourses(this.UserID)
    let current = await this.UserinfoService.getMyCurrentCourses(this.UserID)
    if(current.includes(this.code)){
      this.blocked = true
    }
    else{
      if(this.course.prerequisites !== undefined){
    for(let i = 0 ; i < this.course.prerequisites.length;i++){
      if(!finshed.includes(this.course.prerequisites[i])){
        this.blocked = true
        break
      }
    }
  }
    }
  }
  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();

  onClicked(page:string){
      this.sendata.emit(page);
  }
  RegisterCourse(){
    this.UserinfoService.RegisterCousre(this.UserID,this.code)
    this.sendata.emit('allcourses');
    alert("Course Registered.")
}
}
