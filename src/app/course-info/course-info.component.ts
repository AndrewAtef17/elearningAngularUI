import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseService } from 'src/app/course.service'
import { UserinfoService } from 'src/app/userinfo.service';
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  @Input() code:string | undefined
  course:any
  prereq = ['Course 1','Course 2','Course 3','Course 4','Course 5']
  blocked = true
  reason = "You Cant Enroll in this Course."
  constructor(private CourseService:CourseService, private UserinfoService:UserinfoService) {
    /*const finshedCourses:any = UserinfoService.finshedCourses
    const code = 'SWE490'
    this.course = CourseService.getCourse(code)
    const prerequisites:any = this.course.prerequisites
    const containsAll = finshedCourses.every((element: any) =>{
      return prerequisites.includes(element)
    })
    if(containsAll){
      this.blocked = false
    }*/
   }

  ngOnInit(): void {
    if(this.code ==='SWE490'){
      this.course = {
        name:"User Interface Design",
        code:"SWE490",
        creditHours:"4",
      }
    }
    else if (this.code === 'SWE491'){
      this.course = {
        name:"Cloud Computing",
        code:"SWE491",
        creditHours:"4",
      }
    }
    else if (this.code === 'SWE492'){
      this.course = {
        name:"SW Maintainence",
        code:"SWE492",
        creditHours:"3",
      }
    }
    else if (this.code ==='SWE493'){
      this.course = {
        name:"Safety Critical Systems",
        code:"SWE493",
        creditHours:"4",
      }
    }
    else if (this.code === 'SWE494'){
      this.course = {
        name:"Big Data",
        code:"SWE494",
        creditHours:"3",
      }
    }
    else if (this.code === 'SWE495'){
      this.course = {
        name:"Artificial Intelligence",
        code:"SWE495",
        creditHours:"3",
      }
    }
  }
  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();

  onClicked(page:string){
      this.sendata.emit(page);
  }
}
