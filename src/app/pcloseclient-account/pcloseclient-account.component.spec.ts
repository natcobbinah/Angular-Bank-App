import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcloseclientAccountComponent } from './pcloseclient-account.component';

describe('PcloseclientAccountComponent', () => {
  let component: PcloseclientAccountComponent;
  let fixture: ComponentFixture<PcloseclientAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcloseclientAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcloseclientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
