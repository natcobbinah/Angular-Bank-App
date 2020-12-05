import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienttransactionrecordsComponent } from './clienttransactionrecords.component';

describe('ClienttransactionrecordsComponent', () => {
  let component: ClienttransactionrecordsComponent;
  let fixture: ComponentFixture<ClienttransactionrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienttransactionrecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienttransactionrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
