import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PviewclientdetailsComponent } from './pviewclientdetails.component';

describe('PviewclientdetailsComponent', () => {
  let component: PviewclientdetailsComponent;
  let fixture: ComponentFixture<PviewclientdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PviewclientdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PviewclientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
