import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianTeamComponent } from './indian-team.component';

describe('IndianTeamComponent', () => {
  let component: IndianTeamComponent;
  let fixture: ComponentFixture<IndianTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
