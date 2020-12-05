import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmaketransferComponent } from './clientmaketransfer.component';

describe('ClientmaketransferComponent', () => {
  let component: ClientmaketransferComponent;
  let fixture: ComponentFixture<ClientmaketransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmaketransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmaketransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
