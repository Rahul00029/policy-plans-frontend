import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Policy } from '../policy';
import { PolicyService } from '../service/policy.service';

@Component({
  selector: 'app-search-policies',
  templateUrl: './search-policies.component.html',
  styleUrl: './search-policies.component.css'
})
export class SearchPoliciesComponent implements OnInit{
  searchCriteria = ['Tenure', 'Maturity Amount', 'Premium Amount'];
  selectedCriteria:string='';
  searchValue: number;
  showPoliciesflag :boolean=false;
  showMessage:boolean=false;
  checkRole:boolean=false;
  policies:Policy[];

  constructor(private policyService:PolicyService) {
    if(sessionStorage.getItem('role')=='User')
    {
      this.checkRole=false;
    }
    else{
      this.checkRole=true;
    }
  }
  ngOnInit(): void {
    
  }
    
  search() {
    // Implement your search logic here
    if(this.searchValue>0){
      this.searchPolicies();
    }
    else{
      this.showPoliciesflag=false;
    }
    
    console.log(this.policies);
  }

  searchPolicies(){
    switch(this.selectedCriteria)
    {
      case 'Tenure':{
        this.policyService.searchPolicyByTenure(this.searchValue)
          .subscribe(data=>{
            this.policies=data;
            this.setFlags();
          });
          console.log(this.policies);
          break;
        }
      case 'Maturity Amount':{
         this.policyService.searchPolicyByMaturityAmount(this.searchValue)
          .subscribe(data=>{
            this.policies=data;
            this.setFlags();
          });
          break;
      }
      case 'Premium Amount':{
        this.policyService.searchPolicyByPremiumAmount(this.searchValue)
          .subscribe(data=>{
            this.policies=data;
            this.setFlags();
          });
          break;
      }
    }
    
  }

  setFlags()
  {
    if(this.policies.length==0)
    {
      this.showMessage=true;
      this.showPoliciesflag=false;
    }
    else{
      this.showPoliciesflag=true;
      this.showMessage=false;
    }
  }
  
}
