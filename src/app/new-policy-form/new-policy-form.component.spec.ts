import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPolicyFormComponent } from './new-policy-form.component';

describe('NewPolicyFormComponent', () => {
  let component: NewPolicyFormComponent;
  let fixture: ComponentFixture<NewPolicyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPolicyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPolicyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
