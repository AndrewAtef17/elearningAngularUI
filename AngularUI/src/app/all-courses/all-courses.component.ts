import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  Allcourses = [
    {
      img: "../../assets/u46.png",
      courseName: "User Interface Design"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Safety Critical Systems"
    },
    {
      img: "../../assets/u46.png",
      courseName: "SW Maintainence"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Cloud Computing"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Big Data"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Artificial Intelligence"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Math 1"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Math 2"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Math 3"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Physics"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Logic Design"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Electronics"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Data Structures"
    },
    {
      img: "../../assets/u46.png",
      courseName: "OOP"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Algorithms"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Operating Systems"
    },
    {
      img: "../../assets/u46.png",
      courseName: "System analysis and design"
    },
    {
      img: "../../assets/u46.png",
      courseName: "Software Engineering"
    }
  ]
  page:number = 1
  courses = this.returnSlices(this.page)
  constructor() { }

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

}
