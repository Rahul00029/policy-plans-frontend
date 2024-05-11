import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePolicyComponent } from './subscribe-policy.component';

describe('SubscribePolicyComponent', () => {
  let component: SubscribePolicyComponent;
  let fixture: ComponentFixture<SubscribePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribePolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
