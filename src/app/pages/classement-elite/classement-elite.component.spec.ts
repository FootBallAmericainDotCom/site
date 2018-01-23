import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementEliteComponent } from './classement-elite.component';

describe('ClassementEliteComponent', () => {
  let component: ClassementEliteComponent;
  let fixture: ComponentFixture<ClassementEliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassementEliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementEliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
