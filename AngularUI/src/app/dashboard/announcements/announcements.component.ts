import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  annoucements =[
    {
      courseName: "User Interface Design",
      announcement: "Project phase 1 should be delivered by 9/4/2022"
    },
    {
      courseName: "Software Maintenance",
      announcement: "The next lecture will be online on Thursday 2:00pm"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
