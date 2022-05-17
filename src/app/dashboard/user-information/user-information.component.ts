import { Component, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/userinfo.service';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  user:any
  constructor(private UserinfoService:UserinfoService) {
  this.user = UserinfoService.getUser(this.user.UserID)
  }

  ngOnInit(): void {
  }

}
