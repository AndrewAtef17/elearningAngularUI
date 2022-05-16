import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  //Add Grade htb2a eni a choose course mn bto3y yzhrly f table kol el students 
  //el registered feh Name w drgat w a edit fl drgat w zorar update lkol user aw l kolo 

  //View/upload materials htb2a eni a choose course mn bto3y yzhrly drop down list bl weeks bl materials bt3thom w yzhr option add material

  //Add announcement htb2a eni a choose el course w a add announcement f text box w ados add
  teacher = {
    name: "Mark Noah James",
    email: "Mark2018170905@cis.asu.edu.eg",
    id: "2018170905",
    faculty: "Faculty of Computer and Information Sciences",
    university: "Ain Shams University",
    courses: 2
  }
  constructor() { }

  ngOnInit(): void {
  }

}
