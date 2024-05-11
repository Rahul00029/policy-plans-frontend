import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPolicyFormComponent } from './new-policy-form/new-policy-form.component';
import { SearchPoliciesComponent } from './search-policies/search-policies.component';
import { SubscribePolicyComponent } from './subscribe-policy/subscribe-policy.component';

import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Routes,RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PolicyService } from './service/policy.service';
import { managerGuard } from './auth-service/manager.guard';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPolicyFormComponent,
    SearchPoliciesComponent,
    SubscribePolicyComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideAnimationsAsync('noop'),
    PolicyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
