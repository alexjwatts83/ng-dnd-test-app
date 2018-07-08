/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DndDayComponent } from './dnd-day.component';

describe('DndDayComponent', () => {
  let component: DndDayComponent;
  let fixture: ComponentFixture<DndDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
