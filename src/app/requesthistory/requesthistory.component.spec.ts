import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesthistoryComponent } from './requesthistory.component';

describe('RequesthistoryComponent', () => {
  let component: RequesthistoryComponent;
  let fixture: ComponentFixture<RequesthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
