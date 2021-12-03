import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePowerComponent } from './role-power.component';

describe('RolePowerComponent', () => {
  let component: RolePowerComponent;
  let fixture: ComponentFixture<RolePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
