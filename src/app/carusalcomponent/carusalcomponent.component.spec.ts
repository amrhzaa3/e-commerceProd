import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarusalcomponentComponent } from './carusalcomponent.component';

describe('CarusalcomponentComponent', () => {
  let component: CarusalcomponentComponent;
  let fixture: ComponentFixture<CarusalcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarusalcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarusalcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
