import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregisterclientComponent } from './pregisterclient.component';

describe('PregisterclientComponent', () => {
  let component: PregisterclientComponent;
  let fixture: ComponentFixture<PregisterclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregisterclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregisterclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
