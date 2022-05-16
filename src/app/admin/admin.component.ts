import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //Accept registeration hwa eni hgeb kol el users el status bt3thom pending azhrhom f table w zorar accept aw decline
  pendingUsers:any
  currentUsers:any
  courseMaterials:any
  //Delete users howa eni adkhl (name aw id lsa m3rfsh) w y delete el user

  //Create new course howa hdkhl kol el info w khlas

  //Manage materials htb2a zy el teacher bas kol el courses zahren w fe option delete m3 el add
  constructor() { 
    this.pendingUsers= [
      {
      uname:'Muhamed',
      email:'muhamed@gmail.com',
      universityID: '20102030',
      userType: 'student'
      },
      {
        uname:'Muhamed',
        email:'muhamed@gmail.com',
        universityID: '20102030',
        userType: 'student'
      },
      {
        uname:'Muhamed',
        email:'muhamed@gmail.com',
        universityID: '20102030',
        userType: 'student'
      }
    ]
    this.currentUsers = [
      {
        uname:'mark',
        email:'mark@gmail.com',
        universityID: '20102030',
        userType: 'student'
        },
        {
          uname:'john',
          email:'john@gmail.com',
          universityID: '20102030',
          userType: 'teacher'
        },
    ]
    this.courseMaterials=[{
      Name: "Lec 1",
      Link: 'aaa.com'
    },
    {
      Name: "Lab 1",
      Link: 'aaa.com'
    },
    {
      Name: "Assignment 1",
      Link: 'aaa.com'
    },
    {
      Name: "Lec 1",
      Link: 'aaa.com'
    },
    {
      Name: "Lab 1",
      Link: 'aaa.com'
    },
    {
      Name: "Assignment 1",
      Link: 'aaa.com'
    }]
  }

  ngOnInit(): void {
    
  }

}
