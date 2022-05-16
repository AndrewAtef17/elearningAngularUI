import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-accessed',
  templateUrl: './recently-accessed.component.html',
  styleUrls: ['./recently-accessed.component.css']
})
export class RecentlyAccessedComponent implements OnInit {
  courses = [
    {
      img: "../../assets/u46.png",
      courseName: "User Interface Design",
      progress:  `Progress 0%`
    },
    {
      img: "../../assets/u46.png",
      courseName: "User Interface Design",
      progress: `Progress 0%`
    },
    {
      img: "../../assets/u46.png",
      courseName: "User Interface Design",
      progress: `Progress 0%`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
