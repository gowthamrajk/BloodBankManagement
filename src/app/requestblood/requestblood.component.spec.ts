import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbloodComponent } from './requestblood.component';

describe('RequestbloodComponent', () => {
  let component: RequestbloodComponent;
  let fixture: ComponentFixture<RequestbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestbloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
