import { TestBed } from '@angular/core/testing';

import { CarService2Service } from './car-service2.service';

describe('CarService2Service', () => {
  let service: CarService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
