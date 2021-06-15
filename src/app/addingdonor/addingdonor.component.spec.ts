import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingdonorComponent } from './addingdonor.component';

describe('AddingdonorComponent', () => {
  let component: AddingdonorComponent;
  let fixture: ComponentFixture<AddingdonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingdonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
