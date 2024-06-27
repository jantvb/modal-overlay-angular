import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAcceptedComponent } from './offer-accepted.component';

describe('OfferAcceptedComponent', () => {
  let component: OfferAcceptedComponent;
  let fixture: ComponentFixture<OfferAcceptedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferAcceptedComponent]
    });
    fixture = TestBed.createComponent(OfferAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
