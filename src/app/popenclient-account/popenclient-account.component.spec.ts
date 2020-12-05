import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopenclientAccountComponent } from './popenclient-account.component';

describe('PopenclientAccountComponent', () => {
  let component: PopenclientAccountComponent;
  let fixture: ComponentFixture<PopenclientAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopenclientAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopenclientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
