/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockNameService } from './mock-name.service';

describe('Service: MockName', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockNameService]
    });
  });

  it('should ...', inject([MockNameService], (service: MockNameService) => {
    expect(service).toBeTruthy();
  }));
});
