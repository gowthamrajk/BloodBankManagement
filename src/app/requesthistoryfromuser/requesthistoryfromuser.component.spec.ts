import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesthistoryfromuserComponent } from './requesthistoryfromuser.component';

describe('RequesthistoryfromuserComponent', () => {
  let component: RequesthistoryfromuserComponent;
  let fixture: ComponentFixture<RequesthistoryfromuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesthistoryfromuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesthistoryfromuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
