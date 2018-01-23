import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementCasqueOrComponent } from './classement-casque-or.component';

describe('ClassementCasqueOrComponent', () => {
  let component: ClassementCasqueOrComponent;
  let fixture: ComponentFixture<ClassementCasqueOrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassementCasqueOrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementCasqueOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
