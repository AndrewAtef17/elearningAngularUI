import { Component, Input, OnInit } from '@angular/core';
import { UserinfoService } from '../userinfo.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input()
  UserID!: number;
  teacher:any
  constructor(private UserinfoService:UserinfoService) { }

  async ngOnInit() {
    this.teacher = await this.UserinfoService.getUser(this.UserID)
    this.teacher.courses = this.teacher.currentCourses.length
    console.log(this.teacher)
  }

}
