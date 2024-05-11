import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { managerUserGuard } from './auth-service/manager-user.guard';
import { managerGuard } from './auth-service/manager.guard';
import { userGuard } from './auth-service/user.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewPolicyFormComponent } from './new-policy-form/new-policy-form.component';
import { SearchPoliciesComponent } from './search-policies/search-policies.component';
import { SubscribePolicyComponent } from './subscribe-policy/subscribe-policy.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:'policy',component:NewPolicyFormComponent,canActivate:[managerGuard]},
  {path:'subscribe/:policyId',component:SubscribePolicyComponent,canActivate:[userGuard]},
  {path:'search-policy',component:SearchPoliciesComponent,canActivate:[managerUserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
