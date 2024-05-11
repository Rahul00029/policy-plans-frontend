import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const managerGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthenticationService);
  const router=inject(Router);

  if(authService.isUserLoggedIn() && authService.isUserManager()){
    return true;
  }
  else if(authService.isUserLoggedIn() && !authService.isUserManager()){
    alert("Not authorized");
    return false;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
