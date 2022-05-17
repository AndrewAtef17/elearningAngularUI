import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http'

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
  constructor(private httpclient : HttpClient) { }
  getGrade(courseCode:string[]| string,userID:number){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Grades.json"
    let params = new HttpParams();
    params = params.append('orderBy', '"courseCode"');
    params = params.append('equalTo', `"${courseCode}"`);
    params = params.append('orderBy', '"UserID"');
    params = params.append('equalTo', `"${userID}"`);
    return {
      Grades : this.httpclient.get(url, {params : params}).subscribe((response) => {
        console.log(response)
      })
    }
  }
  getGrades(userID : number){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Grades.json"
    return {
    courseData : this.httpclient.get(url, {
      params: new HttpParams()
      .set('orderBy' , '"UserID"')
      .set('equalTo' , `"${userID}"`)
    }).subscribe((response) => {
      console.log(response)
    })
    }
  }

  setGrades(
    courseCode:string | undefined,
    userID:string | undefined,
    GPA:number | undefined,
    Grades:{
      Practical: number,
      Yearwork: number,
      Midterm: number,
      Quizzes: number,
    } | undefined
    ){
      const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Grades.json"
      this.httpclient.post(url,{
        CourseCode: courseCode,
        UserID: userID,
        GPA : GPA,
        Grades : Grades
      }).subscribe((Response) =>{
        console.log(Response)
        alert("Grade Added.")
      }, (error) => {
        console.log(error)
        alert("Error occured please try again")
      }
      );
  }

}
