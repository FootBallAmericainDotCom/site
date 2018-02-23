import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailOverviewComponent } from './team-detail-overview.component';

describe('TeamDetailOverviewComponent', () => {
  let component: TeamDetailOverviewComponent;
  let fixture: ComponentFixture<TeamDetailOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
