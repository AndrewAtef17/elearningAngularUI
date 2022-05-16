import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  courseCode:string | undefined
  userID:string | undefined
  GPA:number | undefined
  Grades:{
    Practical: number,
    Yearwork: number,
    Midterm: number,
    Quizzes: number,
  } | undefined
  constructor() { }
  getGrades(courseCode:string[]| string,userID:number){

  }
}
