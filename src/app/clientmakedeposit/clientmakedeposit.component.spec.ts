import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmakedepositComponent } from './clientmakedeposit.component';

describe('ClientmakedepositComponent', () => {
  let component: ClientmakedepositComponent;
  let fixture: ComponentFixture<ClientmakedepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmakedepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmakedepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
