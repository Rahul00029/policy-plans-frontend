import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolicyType } from '../policy-type';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PolicyTypeService {
  private getPolicyTypeURL='http://localhost:8083/api/policy/types';
  constructor(private http:HttpClient) {}
  getPolicyTypes(){
    return this.http.get<PolicyType[]>(this.getPolicyTypeURL);
  }
}
