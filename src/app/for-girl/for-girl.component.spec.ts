import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForGirlComponent } from './for-girl.component';

describe('ForGirlComponent', () => {
  let component: ForGirlComponent;
  let fixture: ComponentFixture<ForGirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForGirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
