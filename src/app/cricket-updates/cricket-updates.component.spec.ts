import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketUpdatesComponent } from './cricket-updates.component';

describe('CricketUpdatesComponent', () => {
  let component: CricketUpdatesComponent;
  let fixture: ComponentFixture<CricketUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
