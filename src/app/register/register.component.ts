import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserinfoService } from '../userinfo.service';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  registerForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    username:new FormControl(''),
    faculty:new FormControl(''),
    password:new FormControl(''),
    university:new FormControl(''),

  })


  constructor(private UserinfoService:UserinfoService,private formBuilder: FormBuilder,private route:Router) {
    
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        faculty: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        university: ['', Validators.required],
      }
    );
  }

  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();

  onClicked(type:string){
    console.log(type)
    //lw string fady by3ml back
    if(type === ''){this.sendata.emit('login');return;}
    if (this.registerForm.invalid) {
      alert('Invalid Form:\nPlease Fill all fields')
      return;
    }
    this.route.navigate(['/', 'login']);
    if(+this.type === 1) this.type = 'student'
    else this.type = 'teacher'
    if(type === 'register'){
    this.UserinfoService.registerUser(this.username,this.email,this.password,this.type,this.faculty,this.university)
    }
    this.sendata.emit('login');
  }
}
