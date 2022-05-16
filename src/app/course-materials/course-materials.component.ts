import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseService } from 'src/app/course.service'
@Component({
  selector: 'app-course-materials',
  templateUrl: './course-materials.component.html',
  styleUrls: ['./course-materials.component.css']
})
export class CourseMaterialsComponent implements OnInit {
  @Input() code:string | undefined
    weeks = 10
    name = 'User Interface design'
    week1Materials = {
      "lec 1" : 'aaa.com',
      "lab 1" : 'aaa.com',
      "assignment 1" : 'aaa.com',
      "quiz 1" : 'aaa.com',
    }
    week2Materials = {
      "lec 2" : 'aaa.com',
      "lab 2" : 'aaa.com',
      "assignment 2" : 'aaa.com'
    }
  Materials:any = this.week1Materials
    constructor(private CourseService:CourseService) {
      /*const code = 'SWE490'
      const course = CourseService.getCourse(code)
      const materials:any = course.materials
      const week = 1 
      this.Materials = materials.week*/
     }
  
    ngOnInit(): void {
    }
    @Output() sendata: EventEmitter<any> = new EventEmitter<any>();
  
    onClicked(page:string){
        this.sendata.emit(page);
    }
  
    onOptionsSelected(value:string){
      if(+value === 1){
      this.Materials = this.week1Materials
      }
      else if(+value === 2){
        this.Materials = this.week2Materials
      }
      else{
        this.Materials ={}
      }
  }
  }