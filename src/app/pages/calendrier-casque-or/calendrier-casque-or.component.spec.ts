import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierCasqueOrComponent } from './calendrier-casque-or.component';

describe('CalendrierCasqueOrComponent', () => {
  let component: CalendrierCasqueOrComponent;
  let fixture: ComponentFixture<CalendrierCasqueOrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierCasqueOrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierCasqueOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
