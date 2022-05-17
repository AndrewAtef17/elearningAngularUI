import { Component, Input, OnInit } from '@angular/core';
import { getAdditionalUserInfo } from 'firebase/auth';
import { UserinfoService } from 'src/app/userinfo.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  @Input()
  UserID!: number; 
  user:any
  gotuser =false
  constructor(private UserinfoServicee:UserinfoService) {
    
  }

 async ngOnInit() {
  this.user = await this.UserinfoServicee.getUser(this.UserID)
  this.gotuser = true
    console.log(this.user)
}

}
