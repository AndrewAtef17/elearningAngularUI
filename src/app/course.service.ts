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
  async getCourse(code:string){
   /* if(code === 'SWE490'){
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
      this.to = 3
      this.img = ''
      this.announcements=['Next lecture is cancelled','Quiz 1 will be held during next week']
    }*/

    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
    let course
    await this.httpclient.get(url, {
      params: new HttpParams()
      .set('orderBy' , '"code"')
      .set('equalTo' , `"${code}"`)
    }).toPromise().then((response:any) => {
      course =Object.keys(response).map(key => response[key])[0];
    })
    return course
  }

 async deleteCourse(code:string){
  const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
  let ID
  await this.httpclient.get(url, {
    params: new HttpParams()
    .set('orderBy' , '"code"')
    .set('equalTo' , `"${code}"`)
  }).toPromise().then((response:any) => {
    ID =Object.keys(response)[0];
  })
let res
  const Durl = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses/"+ ID +".json"
  this.httpclient.delete(Durl).subscribe((response) =>{
    res = response
  })

  if(res === undefined){
    alert(`"Course with Code:${code} Doesn't Exist"`)
  }
  else{
  alert(`"Corse with Code: ${code} is Deleted"`)
  }
 }


 async addMaterial(code:string , weekno:number , materialname:string, materiallink:string)
 {
  const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
  let course : any
  let ID : any
  await this.httpclient.get(url, {
    params: new HttpParams()
    .set('orderBy' , '"code"')
    .set('equalTo' , `"${code}"`)
  }).toPromise().then((response:any) => {
    course =Object.keys(response).map(key => response[key])[0];
    ID = Object.keys(response)[0]
  })
  const name = {
    name: materialname
  }
  course.materials[weekno][name.name] =materiallink
  const Uurl = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses/"+ID+".json";
  this.httpclient.patch(Uurl , {materials : course.materials}).subscribe((response) =>{
    console.log(response)
  });
  alert("Material Added")

 }

 async addAnnoucments(code:string , Ann:string){
  const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
  let course : any
  let ID : any
  await this.httpclient.get(url, {
    params: new HttpParams()
    .set('orderBy' , '"code"')
    .set('equalTo' , `"${code}"`)
  }).toPromise().then((response:any) => {
    course =Object.keys(response).map(key => response[key])[0];
    ID = Object.keys(response)[0]
  })
  console.log(course.announcements)
  if(course.announcements === undefined){
    course.announcements= []
    course.announcements.push(Ann)
  }
  else{
  course.announcements.push(Ann)
  }
  const Uurl = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses/"+ID+".json";
  this.httpclient.patch(Uurl , {announcements : course.announcements}).subscribe((response) =>{
    console.log(response)
    alert("new Announcment Added")
  });
 }

  async getAllCourses(){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
    let courses: any[] = []
      await this.httpclient.get(url).toPromise().then((response:any) => {
        for(let i = 0 ; i < Object.keys(response).map(key => response[key]).length ;i++){
          courses.push(Object.keys(response).map(key => response[key])[i])
        }
      }
    )
      return courses
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
    announcements : string[] | undefined,
    ){
      const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Courses.json"
      this.httpclient.post(url,{
      code : code,
      name : name,
      weeksNum :weeksNum,
      prerequisites :prerequisites,
      materials : materials,
      creditHours : creditHours,
      day : day,
      from : from,
      to : to,
      img : img,
      announcements :announcements

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
