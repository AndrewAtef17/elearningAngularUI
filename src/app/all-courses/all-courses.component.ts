import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CourseService } from 'src/app/course.service';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  Allcourses = [
    {
      img: "../../assets/u46.png",
      name: "User Interface Design",
      code: 'SWE490'
    },
    {
      img: "../../assets/u46.png",
      name: "Safety Critical Systems",
      code: 'SWE491'
    },
    {
      img: "../../assets/u46.png",
      name: "SW Maintainence",
      code: 'SWE492'
    },
    {
      img: "../../assets/u46.png",
      name: "Cloud Computing",
      code: 'SWE493'
    },
    {
      img: "../../assets/u46.png",
      name: "Big Data",
      code: 'SWE495'
    },
    {
      img: "../../assets/u46.png",
      name: "Artificial Intelligence",
      code: 'SWE496'
    },
    {
      img: "../../assets/u46.png",
      name: "Math 1",
      code: 'SWE497'
    },
    {
      img: "../../assets/u46.png",
      name: "Math 2",
      code: 'SWE498'
    },
    {
      img: "../../assets/u46.png",
      name: "Math 3",
      code: 'SWE480'
    },
    {
      img: "../../assets/u46.png",
      name: "Physics",
      code: 'SWE481'
    },
    {
      img: "../../assets/u46.png",
      name: "Logic Design",
      code: 'SWE482'
    },
    {
      img: "../../assets/u46.png",
      name: "Electronics",
      code: 'SWE483'
    },
    {
      img: "../../assets/u46.png",
      name: "Data Structures",
      code: 'SWE484'
    },
    {
      img: "../../assets/u46.png",
      name: "OOP",
      code: 'SWE485'
    },
    {
      img: "../../assets/u46.png",
      name: "Algorithms",
      code: 'SWE486'
    },
    {
      img: "../../assets/u46.png",
      name: "Operating Systems",
      code: 'SWE487'
    },
    {
      img: "../../assets/u46.png",
      name: "System analysis and design",
      code: 'SWE488'
    },
    {
      img: "../../assets/u46.png",
      name: "Software Engineering",
      code: 'SWE455'
    },
    {
      img: "../../assets/u46.png",
      name: "Ethics",
      code: 'SWE456'
    }
  ]
  page:number = 1
  numOfPages:number
  courses = this.returnSlices(this.page)
  constructor(private CourseService:CourseService) {
   /* const allCourses:any = CourseService.getAllCourses()
    this.Allcourses = allCourses
    this.courses = this.returnSlices(this.page)*/


    this.numOfPages=Math.ceil(this.Allcourses.length / 6)
   }

  ngOnInit(): void {
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
