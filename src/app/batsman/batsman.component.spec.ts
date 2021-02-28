import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsmanComponent } from './batsman.component';

describe('BatsmanComponent', () => {
  let component: BatsmanComponent;
  let fixture: ComponentFixture<BatsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatsmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
