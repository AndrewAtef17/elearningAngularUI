import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserinfoService } from '../userinfo.service';
import { CourseService } from '../course.service';
import {GradesService} from '../grades.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private UserinfoService:UserinfoService,private route:Router) { }

  username:string = ''
  password:string = ''
  wrong:boolean = false
  ngOnInit(): void {
  }

  
  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendUser: EventEmitter<any> = new EventEmitter<any>();
  async onClicked(page:string){
    try{
     if(page ==='login'){
       const value:string= await this.UserinfoService.AuthUser(this.username.toLowerCase(),this.password)
       
        const rvalue  = +value.slice(-1);
        const userID = +value.slice(0, -1);
         if(rvalue === 1){
          this.route.navigate(['/', 'dashboard']);
           this.sendata.emit({page:'dashboard', userID: userID});
         }
         else if(rvalue === 2){
          this.route.navigate(['/', 'teacher']);
           this.sendata.emit({page:'teacher', userID: userID})
         }
         else if (rvalue === 0){
          this.route.navigate(['/', 'admin']);
           this.sendata.emit({page:'admin', userID: userID})
         }
         else{
           this.wrong= true;
         }
        }
        
       else if(page==='register'){
         this.sendata.emit('register');
       }
       }
       catch(err){
         this.wrong = true
      }

    }
  }

