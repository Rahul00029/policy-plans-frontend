import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  Url:string='http://localhost:8083/api/authenticate/users';
  authenticated:boolean;
  getUser(user){
    return this.http.post<User>(this.Url,user);
   }

  
  checkAuthentication(user,userBackend){
    if(user.userName==userBackend.userName && user.password==userBackend.password){
    this.authenticated=true;
    sessionStorage.setItem('username',user.userName);
    sessionStorage.setItem('role',userBackend.role);
    }
    else{
    this.authenticated=false;
    }
    return this.authenticated;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    let role=sessionStorage.getItem('role');
    return (user != null && role !=null);
  }

  isUserManager(){
    let role=sessionStorage.getItem('role');
    return role==='Manager';
  }

  isUserCustomer(){
    let role=sessionStorage.getItem('role');
    return role==='User';
  }

  logOut(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
  }
}
