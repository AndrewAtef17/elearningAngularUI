import { Injectable } from '@angular/core';

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
  constructor() { }
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
    return {
      code: this.code,
      name:this.name,
      weeksNum:this.weeksNum,
      prerequisites:this.prerequisites,
      materials:this.materials,
      creditHours:this.creditHours,
      day:this.day,
      from:this.from,
      to:this.to,
      img: this.img,
      announcements: this.announcements
    }
  }
  getAllCourses(){
  }
  getMyCurrentCourses(userID:number){
  }
  getMyFinshedCourses(userID:number){
  }

  addCourse
  ( code:string,
    name:string,
    weeksNum:number,
    prerequisites:string[] | undefined,
    materials:{[key: number]: {[key: string]: string}},
    creditHours:number,
    day:string ,
    from:number,
    to:number ,
    img: string){



  }
}
