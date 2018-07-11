import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DndDay } from '../models/dnd-day';
import { CalendarDataService } from './calendar-data.service.service';
import { DndCustomer } from '../models/dnd-customer';

@Injectable()
export class CalendarDataObservableService {
  todos: Observable<DndDay[]>;
  private _todos: BehaviorSubject<DndDay[]>;
  private baseUrl: string;
  private dataStore: {
    todos: DndDay[]
  };
  showModal: boolean = false;
  selectedCustomer: DndCustomer = null;
  constructor(private http: HttpClient, private calendarDataService: CalendarDataService) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
    this.dataStore = { todos: [] };
    this._todos = <BehaviorSubject<DndDay[]>>new BehaviorSubject([]);
    this.todos = this._todos.asObservable();
  }

  loadAll(startFrom: number, take: number) {
    this.http.get(`${this.baseUrl}/posts`).subscribe(data => {
      this.dataStore.todos = this.mapDataToDndDays(data, startFrom, take);
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todos.'));
  }

  mapDataToDndDays(data: any, startFrom: number, take: number): DndDay[] {
    console.log('data', data);
    return this.calendarDataService.getDays(startFrom, take);
  }

  doShowModal(customer: DndCustomer) {
    this.showModal =false;
    this.selectedCustomer =customer;
  }
}
