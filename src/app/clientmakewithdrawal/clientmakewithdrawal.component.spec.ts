import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmakewithdrawalComponent } from './clientmakewithdrawal.component';

describe('ClientmakewithdrawalComponent', () => {
  let component: ClientmakewithdrawalComponent;
  let fixture: ComponentFixture<ClientmakewithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmakewithdrawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmakewithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
