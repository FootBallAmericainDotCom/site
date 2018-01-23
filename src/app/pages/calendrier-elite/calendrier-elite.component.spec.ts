import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierEliteComponent } from './calendrier-elite.component';

describe('CalendrierEliteComponent', () => {
  let component: CalendrierEliteComponent;
  let fixture: ComponentFixture<CalendrierEliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierEliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierEliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
