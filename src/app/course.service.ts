import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  code:string | undefined
  name:string | undefined
  weeksNum:number | undefined
  prerequisites:string[] | undefined
  materials:{[key: number]: {[key: string]: string}} | undefined
  creditHours:number | undefined
  day:string | undefined
  from:number | undefined
  to:number | undefined
  img: string | undefined
  announcements: string[] | undefined
  constructor(private httpclient : HttpClient) { }
  getCourse(code:string){
    if(code === 'SWE490'){
      this.code = 'SWE490'
      this.name = 'User Interface Design'
      this.weeksNum = 4
      this.prerequisites = ['SWE390','SWE290','SWE280']
      this.materials = {
        1:{'lecture 1' : 'hhhh.com', 'lab 1':'bbbbb.com', 'assignment 1':'ssss.com'},
        2:{'lecture 2' : 'hhhh.com', 'lab 2':'bbbbb.com', 'handsOn':'ssss.com'},
        3:{'lecture 3' : 'hhhh.com', 'lab 3':'bbbbb.com', 'quiz 1':'ssss.com'},
        4:{'lecture 4' : 'hhhh.com', 'lab 4':'bbbbb.com', 'assignment 2':'ssss.com'}
      }
      this.creditHours = 4
      this.day = 'sat'
      this.from = 12
      this.to == 3
      this.img = ''
      this.announcements=['Next lecture is cancelled','Quiz 1 will be held during next week']
    }

    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
    return {
    courseData : this.httpclient.get(url, {
      params: new HttpParams()
      .set('orderBy' , '"Code"')
      .set('equalTo' , `"${code}"`)
    }).subscribe((response) => {
      console.log(response)
    })
    }
  }
  getAllCourses(){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
    return {
      CoursesList : this.httpclient.get(url).subscribe(
        (response) => {
          console.log(response)
        }
      )
    }
  }
  getMyCurrentCourses(userID:number){
  }
  getMyFinshedCourses(userID:number){
  }

  addCourse
  (
     code:string,
    name:string,
    weeksNum:number,
    prerequisites:string[] | undefined,
    materials:{[key: number]: {[key: string]: string}},
    creditHours:number,
    day:string ,
    from:number,
    to:number ,
    img: string,
    annoucments : string[] | undefined,
    studentsID: string[] | undefined
    ){
      const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
      this.httpclient.post(url,{
        Code: code,
        Name: name,
        WeeksNum: weeksNum,
        Prerequisites : prerequisites,
        Materials : materials,
        creditHours : creditHours,
        Day: day,
        From: from,
        To : to,
        Image: img,
        Annoucments : annoucments,
        StudentsID : studentsID
      }).subscribe((Response) =>{
        console.log(Response)
        alert(`"New Course Added with Code ${code}."`)
      }, (error) => {
        console.log(error)
        alert("Error occured please try again")
      }
      );
  }
}
