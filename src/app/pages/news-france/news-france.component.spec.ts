import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFranceComponent } from './news-france.component';

describe('NewsFranceComponent', () => {
  let component: NewsFranceComponent;
  let fixture: ComponentFixture<NewsFranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
