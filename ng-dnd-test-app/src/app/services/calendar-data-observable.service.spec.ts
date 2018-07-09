/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalendarDataObservableService } from './calendar-data-observable.service';

describe('Service: CalendarDataObservable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarDataObservableService]
    });
  });

  it('should ...', inject([CalendarDataObservableService], (service: CalendarDataObservableService) => {
    expect(service).toBeTruthy();
  }));
});
