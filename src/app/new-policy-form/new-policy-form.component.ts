import { Component, OnInit} from '@angular/core';
import { Policy } from '../policy';
import { PolicyType } from '../policy-type';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { PolicyService } from '../service/policy.service';
import { PolicyTypeService } from '../service/policy-type.service';
@Component({
  selector: 'app-new-policy-form',
  templateUrl: './new-policy-form.component.html',
  styleUrl: './new-policy-form.component.css'
})
export class NewPolicyFormComponent implements OnInit{
  
  policyTypes:PolicyType[];
  policy : Policy =new Policy();
  showSuccessMessage:boolean=false;
  showErrorMessage:boolean=false;
  policyForm=new FormGroup({
    policyId:new FormControl(0,Validators.compose(
      [
        Validators.required,
        Validators.min(1),
        Validators.pattern('[0-9]{1,10}')
      ]
    )),
	  policyName:new FormControl('',Validators.compose(
      [
        Validators.required,
        Validators.pattern('[a-zA-Z]{0,30}')
      ]
    )),
	  policyDescription:new FormControl('',Validators.compose(
      [
        Validators.required,
      ]
    )),
	  tenure:new FormControl(0,Validators.compose(
      [
        Validators.required,
        Validators.min(1)
      ]
    )),
	  monthlyPremium:new FormControl(0,Validators.compose(
      [
        Validators.required,
        Validators.min(1)
      ]
    )),
	  typeOfPolicy:new FormControl('',Validators.compose(
      [
        Validators.required
      ]
    )),
  });
  
  constructor(private policyService:PolicyService,private policyTypeService:PolicyTypeService){

  }
  ngOnInit(): void {
    this.policyTypeService.getPolicyTypes()
    .subscribe(data=>{
      this.policyTypes=data;
    })
  }

  savePolicy(){ 
    this.policy.policyId=this.policyForm.value.policyId;
    this.policy.policyName=this.policyForm.value.policyName;
    this.policy.policyDescription=this.policyForm.value.policyDescription;
    this.policy.tenure=this.policyForm.value.tenure;
    this.policy.monthlyPremium=this.policyForm.value.monthlyPremium;
    this.policy.typeOfPolicy=this.policyForm.value.typeOfPolicy;
    console.log(this.policy);

    this.policyService.addNewPolicy(this.policy).subscribe(
      {
        next:(success) => {
            console.log("response status",success);
        },
        error:(error)=>{
         
        if(error.status===200)
        {
          this.showSuccessMessage=true;
          this.showErrorMessage=false;
          this.policyForm.reset();
        }
        else if(error.status===400)
        {
          this.showErrorMessage=true;
          this.showSuccessMessage=false;
        }
        else{
          window.alert("Some Internal server error");
        }
        
        }
      }

    );
    this.policy=new Policy();
  }

  limitInputPolicyId(event){
    if(this.policyForm.value.policyId?.toString().length>=10){
        event.preventDefault();
    }}
    limitInputDesc(event){
    if(this.policyForm.value.policyDescription?.length>=200){
        event.preventDefault();
    }
  }
  limitInputPolicyName(event){
    if(this.policyForm.value.policyName?.length>=30)
    {
      event.preventDefault();
    }
  }
  limitInputTenure(event){
    if(this.policyForm.value.tenure?.toString().length>=10)
    {
      event.preventDefault();
    }
  }
  limitInputMpremium(event){
    if(this.policyForm.value.monthlyPremium?.toString().length>=10)
    {
      event.preventDefault();
    }
  }
  
  
}
