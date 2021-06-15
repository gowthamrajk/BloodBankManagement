import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserasdonorComponent } from './userasdonor.component';

describe('UserasdonorComponent', () => {
  let component: UserasdonorComponent;
  let fixture: ComponentFixture<UserasdonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserasdonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserasdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
