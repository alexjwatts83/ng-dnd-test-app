/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarDataService } from './calendar-data.service.service';

describe('Service: CalendarData.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarDataService]
    });
  });

  it('should ...', inject([CalendarDataService], (service: CalendarDataService) => {
    expect(service).toBeTruthy();
  }));
});
