import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();

  onClicked(){
    this.sendata.emit('login');
  }
}
