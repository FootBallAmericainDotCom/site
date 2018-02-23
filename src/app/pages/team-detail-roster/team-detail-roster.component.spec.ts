import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailRosterComponent } from './team-detail-roster.component';

describe('TeamDetailRosterComponent', () => {
  let component: TeamDetailRosterComponent;
  let fixture: ComponentFixture<TeamDetailRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
