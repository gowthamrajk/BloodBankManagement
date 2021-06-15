import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorlistComponent } from './donorlist.component';

describe('DonorlistComponent', () => {
  let component: DonorlistComponent;
  let fixture: ComponentFixture<DonorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
