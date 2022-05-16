import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  username:string = ''
  password:string = ''
  wrong:boolean = false
  ngOnInit(): void {
  }
  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();

  onClicked(page:string){
    if(page ==='login'){
      if(this.username=== 'mark' && this.password ==='mark')
        this.sendata.emit('dashboard');
        else{
          this.wrong= true
        }
      }
    else if(page==='register'){
      this.sendata.emit('register');
    }
  }
}
