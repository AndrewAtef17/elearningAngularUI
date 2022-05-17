import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserinfoService } from '../userinfo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private UserinfoService:UserinfoService) { }
  username:string = ''
  password:string = ''
  wrong:boolean = false
  ngOnInit(): void {
  }

  
  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendUser: EventEmitter<any> = new EventEmitter<any>();
  onClicked(page:string){
    const rvalue= this.UserinfoService.AuthUser(this.username.toLowerCase(),this.password)
    /*if(page ==='login'){
      if(rvalue === 1){
        this.sendata.emit('dashboard');
      }
      else if(rvalue === 2){
        this.sendata.emit('teacher')
      }
      else if (rvalue === 0){
        this.sendata.emit('admin')
      }
      else{
        this.wrong= true;
      }
    }
    else if(page==='register'){
      this.sendata.emit('register');
    }*/
  }
}
