import { Component ,OnInit} from '@angular/core';
import { Policy } from '../policy';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from '../subscription';
import { PolicyService } from '../service/policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from '../service/subscription.service';

@Component({
  selector: 'app-subscribe-policy',
  templateUrl: './subscribe-policy.component.html',
  styleUrl: './subscribe-policy.component.css'
})
export class SubscribePolicyComponent implements OnInit{
    policy : Policy =new Policy();
    policyId:number=0;
    subscription:Subscription= new Subscription();

    showFormFlag:boolean=false;
    showSuccessMessage:boolean=false;
    showErrorMessage:boolean=false;
    subscriptionStatus:string[]=[
      'New',
      'Matured',
      'Defaulted',
      'Terminated'
    ];

    RelationToPolicyHolder:string[]=[
      'Parent',
      'Child',
      'Sibling',
      'Spouse',
      'Cousin'
    ];
    PolicyHolderIdProofType:string[]=[
      'AadharCard',
      'PanCard',
      'VoterCard'
    ];

    subscriptionForm=new FormGroup({
      subscriptionId : new FormControl(0,Validators.compose(
        [
          Validators.required,
          Validators.min(1)
        ]
      )),
	    policyId : new FormControl(),
	    policyHolderName : new FormControl('',Validators.compose(
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]{5,50}'),
          Validators.minLength(5)
        ]
      )),
	    username : new FormControl('',Validators.compose(
        [
          Validators.required
        ]
      )),
	    subscriptionStatus : new FormControl('',Validators.compose(
        [
          Validators.required
        ]
      )),
	    medicalCertificateDocURL : new FormControl('',Validators.compose(
        [
          Validators.required
        ]
      )),
	    relationToPolicyHolder : new FormControl('',Validators.compose(
        [
          Validators.required
        ]
      )),
	    policyHolderIdProofType : new FormControl('',Validators.compose(
        [
          Validators.required
        ]
      )),
	    policyHolderIdProofNo : new FormControl('',Validators.compose(
        [
          Validators.required
        ]
      ))
      });

      constructor(private policyService:PolicyService,private subscriptionService:SubscriptionService,private route:ActivatedRoute){
      }

      ngOnInit(){
        this.route.paramMap.subscribe(params=>{
            this.policyId=parseInt(params.get('policyId'))
          });
        
        this.policyService.searchPolicyById(this.policyId)
        .subscribe(data=>{
          this.policy=data;
        })
      };

      

    saveSubscription(){
      this.subscription.subscriptionId=this.subscriptionForm.value.subscriptionId;
      this.subscription.policyId=this.policyId;
      this.subscription.policyHolderName=this.subscriptionForm.value.policyHolderName;
      this.subscription.username=this.subscriptionForm.value.username;
      this.subscription.subscriptionStatus=this.subscriptionForm.value.subscriptionStatus;
      this.subscription.medicalCertificateDocURL=this.subscriptionForm.value.medicalCertificateDocURL;
      this.subscription.relationToPolicyHolder=this.subscriptionForm.value.relationToPolicyHolder;
      this.subscription.policyHolderIdProofType=this.subscriptionForm.value.policyHolderIdProofType;
      this.subscription.policyHolderIdProofNo=this.subscriptionForm.value.policyHolderIdProofNo;
      
      this.subscriptionService.addNewSubscription(this.subscription,this.policyId)
      .subscribe((response)=>{
        console.log("Response "+response);
      },
      (error)=>{
        if(error.status===200){
          this.showSuccessMessage=true;
          this.showErrorMessage=false;
          this.subscriptionForm.reset();
          window.scrollTo(0,0);
        }
        else if(error.status===400){
          this.showSuccessMessage=false;
          this.showErrorMessage=true;
          window.scrollTo(0,0);
        }
        else{
          console.log("Some Internal Server Error",error.error.message);
        }
       
      });
    }
    

    showSubscriptionForm(){
      this.subscriptionForm.controls['policyId'].setValue(this.policyId);
      this.subscriptionForm.get('policyId')?.disable();
      this.showFormFlag=true;
    }

    limitInputSubscriptionId(event){
      if(this.subscriptionForm.value.subscriptionId?.toString().length>=10){
          event.preventDefault();
      }
    }
    limitInputPolicyHolderName(event){
      if(this.subscriptionForm.value.policyHolderName?.length>=50){
          event.preventDefault();
      }
    }
    limitInputUsername(event){
      if(this.subscriptionForm.value.username?.length>=6)
      {
        event.preventDefault();
      }
    }
    limitInputMedicalCertificate(event){
      if(this.subscriptionForm.value.medicalCertificateDocURL?.length>=200)
      {
        event.preventDefault();
      }
    }
    limitInputProofNo(event){
      if(this.subscriptionForm.value.policyHolderIdProofNo?.length>=12)
      {
        event.preventDefault();
      }
    }
}
