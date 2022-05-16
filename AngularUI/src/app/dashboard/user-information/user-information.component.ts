import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  user = {
    name: "Mark Noah James",
    email: "Mark2018170905@cis.asu.edu.eg",
    id: "2018170905",
    faculty: "Faculty of Computer and Information Sciences",
    university: "Ain Shams University"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
