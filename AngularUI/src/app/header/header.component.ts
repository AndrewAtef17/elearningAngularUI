import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() UserPages:boolean | undefined
  page:string = 'dashboard'
  constructor() { }

  @Output() sendata: EventEmitter<any> = new EventEmitter<any>();

  onClicked(page:string){
    this.page=page
    this.sendata.emit(page);
  }


  ngOnInit(): void {
  }

}
