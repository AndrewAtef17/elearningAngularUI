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
  async AuthUser(username:string , password:string):Promise<string>{
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
    let params = new HttpParams();
    let type
    let userID
    // Begin assigning parameters
    params = params.append('orderBy', '"USerName"');
    params = params.append('equalTo', `"${username}"`);
    params = params.append('orderBy', '"Password"');
    params = params.append('equalTo', `"${password}"`);
      await this.httpclient.get(url, {
        params: params
      }).toPromise().then((response:any) => {
         type =Object.keys(response).map(key => response[key])[0].Type;
         userID = Object.keys(response).map(key => response[key])[0].UserID;
      })
      if(type === 'student'){
        return userID + '1'
      }
      else if(type ==='teacher'){
        return userID + '2'
      }
      else if (type ==='admin'){
        return userID + '0'
      }
      else{
        return '-1'
      }
  }
  async getUser(userid:number){
    //a
    const url = "https://angularui-51409-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
    let user
      await this.httpclient.get(url, {
        params: new HttpParams()
        .set('orderBy' , '"UserID"')
        .set('equalTo' , `${userid}`)
      }).toPromise().then((response:any) => {
        user =Object.keys(response).map(key => response[key])[0];
      })
      return user
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
      USerName :  username,
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
