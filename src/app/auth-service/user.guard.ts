import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthenticationService);
  const router=inject(Router);

  if(authService.isUserLoggedIn() && authService.isUserCustomer()){
    return true;
  }
  else if(authService.isUserLoggedIn() && !authService.isUserCustomer()){
    alert("Not authorized");
    return false;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
