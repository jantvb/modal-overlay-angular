import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOfferComponent } from './show-offer.component';

describe('ShowOfferComponent', () => {
  let component: ShowOfferComponent;
  let fixture: ComponentFixture<ShowOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOfferComponent]
    });
    fixture = TestBed.createComponent(ShowOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
