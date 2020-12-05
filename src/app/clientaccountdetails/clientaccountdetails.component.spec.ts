import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientaccountdetailsComponent } from './clientaccountdetails.component';

describe('ClientaccountdetailsComponent', () => {
  let component: ClientaccountdetailsComponent;
  let fixture: ComponentFixture<ClientaccountdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientaccountdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientaccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
