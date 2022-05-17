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

  
  async getGrade(userID:number , courseCode:string){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Grades.json"
    let params = new HttpParams();
    let grade : any
    params = params.append('orderBy', '"courseCode"');
    params = params.append('equalTo', `"${courseCode}"`);
    params = params.append('orderBy', '"UserID"');
    params = params.append('equalTo', `"${userID}"`);
    
    await this.httpclient.get(url, {params : params}).toPromise().then((response:any) => {
        grade =  Object.keys(response).map(key => response[key])[0];
      })
      return grade 
  }

  async deleteGrade(userID : number , courseCode : string){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Grades.json"
    let params = new HttpParams();
    let ID : any
    params = params.append('orderBy', '"courseCode"');
    params = params.append('equalTo', `"${courseCode}"`);
    params = params.append('orderBy', '"UserID"');
    params = params.append('equalTo', `"${userID}"`);
    
    await this.httpclient.get(url, {params : params}).toPromise().then((response:any) => {
        ID =  Object.keys(response)[0];
      })
      const Durl = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Grades/"+ ID +".json"
      this.httpclient.delete(Durl).subscribe((response) =>{
        console.log(response)
      })
      alert("Grade Deleted")
  }

  async updateGrade(userID : number , courseCode : string , GPA:number , Grades : any){

    await this.deleteGrade(userID , courseCode)
    await this.setGrades(courseCode, userID , GPA , Grades)
    alert("Grade Updated")
  }

  async getMyGrades(userID : number){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Grades.json"
    
    let GradesList : any

    await this.httpclient.get(url, {
      params: new HttpParams()
      .set('orderBy' , '"userID"')
      .set('equalTo' , `${userID}`)
    }).toPromise().then((response: any) => {
      console.log(response)
      GradesList = Object.keys(response).map(key => response[key]);
    })
    console.log(GradesList)
    return GradesList
  }

  setGrades(
    courseCode:string | undefined,
    userID:number | undefined,
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
        courseCode: courseCode,
        userID: userID,
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
