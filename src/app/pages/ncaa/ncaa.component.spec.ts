import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcaaComponent } from './ncaa.component';

describe('NcaaComponent', () => {
  let component: NcaaComponent;
  let fixture: ComponentFixture<NcaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
