import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth-service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  role:string='';
  constructor(private authenticationService:AuthenticationService,private router:Router){
    this.role=sessionStorage.getItem('role');
    console.log(this.role);
  }
  

  onClick(){
    console.log('role',this.role);
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }
}
