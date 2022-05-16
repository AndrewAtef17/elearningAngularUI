import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserinfoService } from '../userinfo.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string =''
  userID:string =''
  email:string =''
  password:string=''
  type:string =''
  faculty:string =''
  university:string =''
  constructor(private UserinfoService:UserinfoService) {
    
   }

  ngOnInit(): void {
  }

  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();

  onClicked(type:string){
    if(+this.type === 1) this.type = 'student'
    else this.type = 'teacher'
    if(type === 'register'){
    this.UserinfoService.registerUser(this.username,+this.userID,this.email,this.password,this.type,this.faculty,this.university)
    }
    this.sendata.emit('login');
  }
}
