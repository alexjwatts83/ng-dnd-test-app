import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndCalendarComponent } from './dnd-calendar.component';

describe('DndCalendarComponent', () => {
  let component: DndCalendarComponent;
  let fixture: ComponentFixture<DndCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
