import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansPantsComponent } from './jeans-pants.component';

describe('JeansPantsComponent', () => {
  let component: JeansPantsComponent;
  let fixture: ComponentFixture<JeansPantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeansPantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeansPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
