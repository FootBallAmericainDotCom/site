import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeFranceComponent } from './equipe-france.component';

describe('EquipeFranceComponent', () => {
  let component: EquipeFranceComponent;
  let fixture: ComponentFixture<EquipeFranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipeFranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
