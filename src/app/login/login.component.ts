import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service/authentication.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User=new User();
  userBackend:User=new User();
   loginForm=new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
   })
   constructor(private router:Router,private authService:AuthenticationService){}
   
   onSubmit(){

      this.user.userName=this.loginForm.value.userName;
      this.user.password=this.loginForm.value.password;
      this.authService.getUser(this.user).subscribe({
        next:(response)=>{
        this.userBackend.userName=response.userName;
        this.userBackend.password=response.password;
        this.userBackend.role=response.role;
        if(this.authService.checkAuthentication(this.user,this.userBackend)){
          this.router.navigate(['/home']);
        }
        else{
          alert('Either username or password is incorrect');
        }
      },error:(error)=>{
        if(error.status===403)
        {
          alert('Either username or password is incorrect');
        }
       
      }}
      );
   }
}
