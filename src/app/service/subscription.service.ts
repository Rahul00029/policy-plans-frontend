import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from '../subscription';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private URL='http://localhost:8083/api/policy';
  constructor(private http:HttpClient) { }

  addNewSubscription(subscription:Subscription,policyId:number){
    return this.http.post<any>(this.URL+'/'+policyId+'/subscribe',subscription);
  }
}
