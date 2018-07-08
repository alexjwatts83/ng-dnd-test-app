import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dnd-calendar-week',
  templateUrl: './dnd-calendar-week.component.html',
  styleUrls: ['./dnd-calendar-week.component.css']
})
export class DndCalendarWeekComponent implements OnInit {

  dates: any[]=[ ]
  constructor() {
    let now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log('now.week()', now.week()); // add this 3 of 4
    console.log('now.weekYear()', now.weekYear()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4
   }

  ngOnInit() {
    this.dates = [];
    let take: number = 14;
    let startFromDate = this.getMonday(new Date());
    for (let i = 0; i < take; i++) {
      let date = new Date(startFromDate);
      date.setDate(date.getDate() + i);
      let dateAsMoment = moment(date); // add this 2 of 4
      this.dates.push({
        date: date,
        week: dateAsMoment.week(),
      });
    }
    console.log('dates', this.dates);
  }

  private getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 0)
      date.setHours(-24 * (day - 7));
    return date;
  }

  private getWeek(date: any){
    var onejan: any = new Date(date.getFullYear(),0,1);
    return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
  }
}
