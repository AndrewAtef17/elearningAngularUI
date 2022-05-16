import { Injectable } from '@angular/core';

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
  constructor() { 
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
  getUser(){
    return {
      username: this.username,
      profilePic: this.profilePic,
      userID: this.userID,
      email: this.email,
      password: this.password,
      type: this.type,
      finshedCourses: this.finshedCourses,
      currentCourses: this.currentCourses,
      lastAccessedCourses: this.lastAccessedCourses,
      faculty: this.faculty,
      university: this.university
    }
  }
  registerUser(username:string, userID:number, email:string, password:string,type:string,faculty:string,university:string){
    let profilePic = ''
    console.log(userID)
    console.log(type)
  }
}
