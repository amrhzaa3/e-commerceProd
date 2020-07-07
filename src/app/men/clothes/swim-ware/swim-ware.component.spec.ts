import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimWareComponent } from './swim-ware.component';

describe('SwimWareComponent', () => {
  let component: SwimWareComponent;
  let fixture: ComponentFixture<SwimWareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimWareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimWareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
