import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandConditionComponent } from './termsand-condition.component';

describe('TermsandConditionComponent', () => {
  let component: TermsandConditionComponent;
  let fixture: ComponentFixture<TermsandConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsandConditionComponent]
    });
    fixture = TestBed.createComponent(TermsandConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
