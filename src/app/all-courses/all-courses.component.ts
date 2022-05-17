import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CourseService } from 'src/app/course.service';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  Allcourses:any
  page:number = 1
  numOfPages:number = 0
  courses:any
  img= "../../assets/u46.png"
  constructor(private CourseService:CourseService) {
   /* const allCourses:any = CourseService.getAllCourses()
    this.Allcourses = allCourses
    this.courses = this.returnSlices(this.page)*/

   }

  async ngOnInit() {
    this.Allcourses= await this.CourseService.getAllCourses()
    this.courses = this.returnSlices(this.page)
    this.numOfPages=Math.ceil(this.Allcourses.length / 6)
  }

  returnSlices(page:number){
    let min = (page-1)*6
    let max = (page-1)*6 + 6

    return this.Allcourses.slice(min,max)
  }
  Clicked(page:number){
    this.page = page
    this.courses = this.returnSlices(this.page)
  }
  @Output() courseClick: EventEmitter<any> = new EventEmitter<any>();
  onCourseClick(event:any){
    console.log(event)
    this.courseClick.emit(event);
  }
}
