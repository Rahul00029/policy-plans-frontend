import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../policy';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private addPolicyURL='http://localhost:8083/api/policy';
  private searchPolicyURL='http://localhost:8083/api/policy';
  policy:Policy[];
  constructor(private http:HttpClient) { }
  addNewPolicy(policy:Policy)
  {
    return this.http.post<any>(this.addPolicyURL,policy);
  }

  searchPolicyById(policyId:number){
    return this.http.get<Policy>(this.searchPolicyURL+'/'+policyId);
  }
  searchPolicyByTenure(tenure:number)
  {
    console.log(tenure);
    this.http.get<Policy[]>(this.searchPolicyURL+'/tenure/'+tenure).subscribe({complete:console.info});
    return  this.http.get<Policy[]>(this.searchPolicyURL+'/tenure/'+tenure);
  }
  searchPolicyByMaturityAmount(maturityAmount:number)
  {
    return this.http.get<Policy[]>(this.searchPolicyURL+'/maturity/'+maturityAmount);
  }
  searchPolicyByPremiumAmount(monthlyPremium:number)
  {
    return this.http.get<Policy[]>(this.searchPolicyURL+'/premium/'+monthlyPremium);
  }
}
