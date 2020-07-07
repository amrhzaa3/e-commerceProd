import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMarketsidebarComponent } from './the-marketsidebar.component';

describe('TheMarketsidebarComponent', () => {
  let component: TheMarketsidebarComponent;
  let fixture: ComponentFixture<TheMarketsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMarketsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMarketsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
