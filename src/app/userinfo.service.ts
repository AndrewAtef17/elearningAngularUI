import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { User } from 'firebase/auth';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  userID:number | undefined
  profilePic:string | undefined
  username:string | undefined
  email:string | undefined
  password:string | undefined
  type:string | undefined
  finshedCourses:string[] | undefined
  currentCourses:string[] | undefined
  lastAccessedCourses:string[] | undefined
  faculty:string | undefined
  university: string | undefined
  constructor(private httpclient : HttpClient) { 
    }
  setUser(username:string,password:string){
    if (username ==='mark' && password === 'mark'){
      this.username = 'mark'
      this.profilePic = ''
      this.userID = 1
      this.email = 'mark@gmail.com'
      this.password = 'mark'
      this.type = 'student'
      this.finshedCourses = ['SWE390','SWE290','SWE280']
      this.currentCourses = ['SWE300','SWE310']
      this.faculty = 'Computer and Information Sciences'
      this.university = 'Ain Shams'
      this.lastAccessedCourses =['SWE290','SWE280','SWE380']
    }
    else if (username ==='john' && password === 'john'){
      this.username = 'john'
      this.profilePic = ''
      this.userID = 2
      this.email = 'john@gmail.com'
      this.password = 'john'
      this.type = 'teacher'
      this.faculty = 'Computer and Information Sciences'
      this.university = 'Ain Shams'
    }
    if(this.type === 'student')
    return 1;
    else if (this.type ==='teacher')
    return 2;
    if(username ==='admin' && password === 'admin'){
      return 0;
    }
    return -1;
  }
  AuthUser(username:string , password:string){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
    return {
      user : this.httpclient.get(url, {
        params: new HttpParams()
        .set('orderBy' , '"UserID"')
        .set('equalTo' , '"${username}"')
        .set('equalTo', '"${password}"')
      }).subscribe((response) => {
        console.log(response)
      })
    }
  }
  getUser(userid:string){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
    return {
      user : this.httpclient.get(url, {
        params: new HttpParams()
        .set('orderBy' , '"UserID"')
        .set('equalTo' , '"${userid}"')
      }).subscribe((response) => {
        console.log(response)
      })
    }
  }
  getUsers(){
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
    return {
      UsersList : this.httpclient.get(url).subscribe(
        (response) => {
          console.log(response)
        }
      )
    }
  }
  registerUser(username:string, userID:number, email:string, password:string,type:string,faculty:string,university:string){
    let profilePic = ''
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
    this.httpclient.post(
      url , 
      {UserID : userID,
      UserName :  username,
      Password : password,
      Type : type,
      Email : email,
      Faculty : faculty,
      University : university,
      ProfilePicture : profilePic}
      ).subscribe((Response) =>{
        console.log(Response)
        alert("Registered.")
      }, (error) => {
        console.log(error)
        alert("Error occured please try again")
      }
      );
      

    console.log(type)
  }
}
