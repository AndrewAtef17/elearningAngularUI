import { Component, OnInit } from '@angular/core';

import { UserinfoService } from '../userinfo.service';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Code : string = " "
  Name : string = " "
  Number! : number
  Prerequisites : string = " "
  Hours! : number 
  Day : string = " "
  Start! : number
  Finish! : number 
  Img : string = " "
  UserID! : number

  
  //Accept registeration hwa eni hgeb kol el users el status bt3thom pending azhrhom f table w zorar accept aw decline

  //Delete users howa eni adkhl (name aw id lsa m3rfsh) w y delete el user

  //Create new course howa hdkhl kol el info w khlas

  //Manage materials htb2a zy el teacher bas kol el courses zahren w fe option delete m3 el add
  constructor(private userinfoservice : UserinfoService , private courseservice : CourseService) { 
    
  }


  ngOnInit(): void {
  }

  async onClicked(type:string){
    if(type === "AddCourse"){
      let PrerequisitesArray =  this.Prerequisites.split(',')
      await this.courseservice.addCourse(
        this.Code,
         this.Name,
          this.Number,
           PrerequisitesArray,
            {},
             this.Hours,
              this.Day,
               this.Start,
                this.Finish,
                 this.Img,
                  []);
    }else if(type === "DeleteCourse"){
      await this.courseservice.deleteCourse(this.Code)
    }else if(type === "AssigntoTeacher"){
      await this.userinfoservice.RegisterCousre(this.UserID , this.Code)
      alert('Course Assigned.')
    }else if(type === "RemoveCourseFromTeacher"){
      await this.userinfoservice.removeFromCurrentCourses(this.UserID , this.Code)
    }else if (type === 'DeleteUser'){
      await this.userinfoservice.DeleteUSer(this.UserID)
      alert("User Deleted")
    }else {
      alert("Something Wrong Happend")
    }
    
  }
}
