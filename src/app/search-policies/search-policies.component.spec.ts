import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPoliciesComponent } from './search-policies.component';

describe('SearchPoliciesComponent', () => {
  let component: SearchPoliciesComponent;
  let fixture: ComponentFixture<SearchPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPoliciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
