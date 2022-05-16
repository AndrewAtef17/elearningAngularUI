import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses = [
    {
      img: "../../assets/u46.png",
      courseName: "User Interface Design",
      progress:  `Progress 0%`
    },
    {
      img: "../../assets/u46.png",
      courseName: "Cloud Computing",
      progress: `Progress 0%`
    },
    {
      img: "../../assets/u46.png",
      courseName: "SW Maintainence",
      progress: `Progress 0%`
    },
    {
      img: "../../assets/u46.png",
      courseName: "Saftey and critical systems",
      progress: `Progress 0%`
    },
    {
      img: "../../assets/u46.png",
      courseName: "Big Data",
      progress: `Progress 0%`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
