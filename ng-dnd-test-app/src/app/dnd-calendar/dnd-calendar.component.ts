import { Component, OnInit } from '@angular/core';
import { DndCustomer } from '../models/dnd-customer';
import { DndTimeSlot } from '../models/dnd-time-slot';
import { DndDay } from '../models/dnd-day';
// import { start } from 'repl';
import { FormGroup, FormControl } from '@angular/forms';
import { CalendarDataService } from '../services/calendar-data.service.service';

@Component({
  selector: 'app-dnd-calendar',
  templateUrl: './dnd-calendar.component.html',
  styleUrls: ['./dnd-calendar.component.css']
})

export class DndCalendarComponent implements OnInit {
  Days: DndDay[];
  UnschduledJobs: DndCustomer[] = [];
  ShowUnscheduled: boolean = false;
  FilterBy: string = 'Suburb';
  model: any = {};
  heroForm: any;
  LastNames: any[] = [
    'Smith',
    'Jones',
    'Brown',
    'Williams',
    'Johnson',
    'White',
    'Wilson',
    'Lee',
    'Taylor',
    'Green',
    'Thomas',
    'Jackson',
    'Thompson',
    'Roberts',
    'Anderson',
    'Harris',
    'Davis',
    'James',
    'Martin',
    'Clark',
    'King',
    'Richards',
    'Robinson',
    'McDonald',
    'Kelly',
    'Miller',
    'Robertson',
    'Harrison',
    'Edwards',
    'Nguyen',
    'Hill',
    'Adams',
    'Evans',
    'Davies',
    'Walker',
    'Richardson',
    'Stevens',
    'Lewis',
    'Parker',
    'Carter',
    'Cooper',
    'Murphy',
    'Clarke',
    'Morris',
    'Gray',
    'Baker',
    'Ryan',
    'Hall',
    'Watson',
    'Phillips',
    'Campbell',
    'Wood',
    'Allen',
    'Moore',
    'Young',
    'Scott',
    'Stewart',
    'Mitchell',
    'Hughes',
    'Wright',
    'Matthews',
    'Cook',
    'Johnston',
    'Turner',
    'Graham',
    'Simpson',
    'Bell',
    'Thomson',
    'Rogers',
    'Murray',
    'Kennedy',
    'O\'Brien',
    'Morgan',
    'Ross',
    'Mills',
    'Fisher',
    'Ellis',
    'Price',
    'Knight',
    'Cox',
    'Ward',
    'Butler',
    'Bennett',
    'Reid',
    'Bailey',
    'Mason',
    'Marshall',
    'Webb',
    'Walsh',
    'Cameron',
    'Gibson',
    'Russell',
    'Harvey',
    'Shaw',
    'Chapman',
    'Elliott',
    'Hamilton',
    'Tran',
    'Pearce',
    'Colling'
  ];

  FirstNames: any[] = [
    'Emily',
    'Sarah',
    'Jessica',
    'Emma',
    'Chloe',
    'Georgia',
    'Sophie',
    'Hannah',
    'Amy',
    'Olivia',
    'lucy',
    'Grace',
    'Lily',
    'Jess',
    'Kate',
    'Caitlin',
    'Zoe',
    'Jasmine',
    'Laura',
    'ella',
    'Charlotte',
    'Holly',
    'Erin',
    'lauren',
    'samantha',
    'Katie',
    'Jade',
    'chelsea',
    'Abbey',
    'Hayley',
    'Isabella',
    'Stephanie',
    'Courtney',
    'mia',
    'Amelia',
    'Ruby',
    'Bella',
    'Molly',
    'Claire',
    'julia',
    'ebony',
    'Maddy',
    'Ashleigh',
    'Tayla',
    'Amber',
    'Nicole',
    'claudia',
    'Caitlyn',
    'Natasha',
    'Taylor',
    'Ellie',
    'megan',
    'Rebecca',
    'Kayla',
    'Rachel',
    'Maddie',
    'Anna',
    'Brooke',
    'Ashley',
    'Gemma',
    'Bianca',
    'Melissa',
    'bree',
    'Elizabeth',
    'Imogen',
    'Eliza',
    'Clare',
    'Paige',
    'Tegan',
    'Lisa',
    'Rhiannon',
    'morgan',
    'Tara',
    'Jacinta',
    'Natalie',
    'shannon',
    'Madeleine',
    'Steph',
    'Bonnie',
    'Brianna',
    'Abbie',
    'jessie',
    'Ashlee',
    'aLYSSA',
    'Rose',
    'Casey',
    'Tahlia',
    'Ava',
    'Madison',
    'Kaitlyn',
    'Leah',
    'abby',
    'Bethany',
    'Rachael',
    'jennifer',
    'Monique',
    'Alice',
    'shelby',
    'Annie',
    'jamie',
    'James',
    'jack',
    'Harry',
    'Daniel',
    'alex',
    'Liam',
    'Jake',
    'tom',
    'Dylan',
    'Sam',
    'ryan',
    'Ben',
    'Lachlan',
    'Jordan',
    'Chris',
    'David',
    'Josh',
    'Jacob',
    'Matthew',
    'William',
    'Nathan',
    'Joshua',
    'Riley',
    'Luke',
    'michael',
    'Max',
    'Ethan',
    'Patrick',
    'JACKSON',
    'matt',
    'Andrew',
    'Nicholas',
    'Zac',
    'John',
    'connor',
    'Jayden',
    'Thomas',
    'Nick',
    'Aaron',
    'Bailey',
    'Kyle',
    'lachie',
    'cody',
    'sean',
    'Noah',
    'Oliver',
    'will',
    'Brayden',
    'edward',
    'Callum',
    'Samuel',
    'Cameron',
    'Dan',
    'Marcus',
    'Harrison',
    'Shaun',
    'Tim',
    'Jasper',
    'caleb',
    'charlie',
    'Jason',
    'Peter',
    'Mitch',
    'Hayden',
    'Isaac',
    'Steven',
    'Adam',
    'Oscar',
    'Mitchell',
    'Hamish',
    'Lucas',
    'Scott',
    'Blake',
    'Anthony',
    'Jim',
    'Stephen',
    'Tristan',
    'justin',
    'Corey',
    'Gus',
    'Joel',
    'Jonathan',
    'Jeremy',
    'Ali',
    'Joe',
    'Brock',
    'Kevin',
    'Henry',
    'Brandon',
    'Shane',
    'Lewis',
    'joey',
    'Hugo',
    'zachary',
    'tony',
    'Angus',
    'Kieran',
    'Brenden',
    'Stewart',
    'Mark'
  ];

  _selectCustomer: DndCustomer;
  _selectedTimeSlotIndex: number = -1;
  _selectedDayIndex: number = -1;

  get SelectedTimeSlot(): DndTimeSlot {
    if (this._selectedTimeSlotIndex > -1) {
      return this.SelectedDay.TimeSlots[this._selectedTimeSlotIndex];
    }
    return null;
  }
  get SelectedCustomer(): DndCustomer {
    if (this._selectCustomer != null) {
      return this._selectCustomer;
    }
    return null;
  }
  get SelectedDay(): DndDay {
    if (this._selectedDayIndex > -1) {
      return this.Days[this._selectedDayIndex];
    }
    return null;
  }
  simpleDrop: any = null;
  constructor() { }

  createCustomer(startingPoint: number, suburb: string, postcode: string): DndCustomer {
    let firstName = this.FirstNames[(startingPoint + 1)];
    let lastName = this.LastNames[(startingPoint + 1)];
    const comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
    let cust = new DndCustomer(firstName, lastName, 'job ' + (startingPoint + 1), comment, 'link' + (startingPoint + 1), suburb, postcode);

    return cust;
  }

  createDay(startingPoint: number, date: Date): DndDay {
    let cust1 = this.createCustomer(startingPoint + 0, 'Gosford', '2250');
    let cust2 = this.createCustomer(startingPoint + 1, 'Erina', '2250');
    let cust3 = this.createCustomer(startingPoint + 2, 'Erina', '2250');
    let cust4 = this.createCustomer(startingPoint + 3, 'Newcastle', '2300');
    let cust5 = this.createCustomer(startingPoint + 4, 'Newcastle', '2300');
    let cust6 = this.createCustomer(startingPoint + 5, 'Newcastle', '2300');
    let cust7 = this.createCustomer(startingPoint + 6, 'Erina', '2250');

    let timeslot1 = new DndTimeSlot('10am', 10, [cust1, cust2]);
    let timeslot2 = new DndTimeSlot('2pm', 5, [cust3, cust4, cust7]);
    let timeslot3 = new DndTimeSlot('7pm', 7, [cust5, cust6]);

    let day = new DndDay([timeslot1, timeslot2, timeslot3], date);

    return day;
  }

  getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1)
      date.setHours(-24 * (day - 1));
    return date;
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  ngOnInit() {
    this.model = {
      FilterBy: this.FilterBy
    };

    this.Days = [];
    let monday = this.getMonday(new Date());
    for (let i = 0; i < 7; i++) {
      let date = new Date(monday);
      date.setDate(date.getDate() + i);
      this.Days.push(this.createDay(((i + 1) * 7), date));
    }

    let startingPoint = 41;
    this.UnschduledJobs = [];
    if(this.ShowUnscheduled){
      for (let j = 0; j < 5; j++) {
        this.UnschduledJobs.push(this.createCustomer(startingPoint + 0, 'Gosford', '2250'));
        startingPoint++;
      }
      for (let j = 0; j < 5; j++) {
        this.UnschduledJobs.push(this.createCustomer(startingPoint + 0, 'Erina', '2250'));
        startingPoint++;
      }
      for (let j = 0; j < 5; j++) {
        this.UnschduledJobs.push(this.createCustomer(startingPoint + 0, 'Newcastle', '2300'));
        startingPoint++;
      }
    }
  }

  transferDataSuccess($event: any, droppedDayIndex: number, droppedTimeslotIndex: number) {
    console.log('called transferDataSuccess');
    this.simpleDrop = $event;
    console.log(`droppedDayIndex: ${droppedDayIndex}`);
    console.log(`_selectedDayIndex: ${this._selectedDayIndex}`);
    console.log(`droppedTimeslotIndex: ${droppedTimeslotIndex}`);
    console.log(`_selectedTimeSlotIndex: ${this._selectedTimeSlotIndex}`);

    if (this.simpleDrop.dragData.fromUnscheduled) {
      console.log('from unscheduled');
      let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
      let filterView = [];
      let selectedSlotIndex = -1;
      this.UnschduledJobs.forEach((element, index) => {
        if (element.JobNumber === droppedJobNumber) {
          selectedSlotIndex = index;
        } else {
          filterView.push(element);
        }
      });
      // add to unscheduled
      let concat = this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers.concat(this.UnschduledJobs[selectedSlotIndex]);
      console.log("concat:", concat);
      this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;

      // and remove from scheduled
      this.UnschduledJobs = filterView;

      return;
    }
    if (droppedDayIndex == -1 && droppedTimeslotIndex == -1) {
      let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
      let filterView = [];
      let selectedSlotIndex = -1;
      this.SelectedTimeSlot.Customers.forEach((element, index) => {
        if (element.JobNumber === droppedJobNumber) {
          selectedSlotIndex = index;
        } else {
          filterView.push(element);
        }
      });
      // add to unscheduled
      let concat = this.UnschduledJobs.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
      console.log("concat:", concat);
      this.UnschduledJobs = concat;

      // and remove from scheduled
      this.Days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;

      // maybe display modal
      return;
    }

    let droppedOnSameDay = droppedDayIndex === this._selectedDayIndex;
    let droppedOnSameTimeSlot = droppedTimeslotIndex === this._selectedTimeSlotIndex;

    if (droppedOnSameDay && droppedOnSameTimeSlot) {
      console.log('Dropped on same day and time slot, do nothing');
    }
    else {
      let droppedJobNumber = this.simpleDrop.dragData.customer.JobNumber
      let filterView = [];
      let selectedSlotIndex = -1;
      this.SelectedTimeSlot.Customers.forEach((element, index) => {
        if (element.JobNumber === droppedJobNumber) {
          selectedSlotIndex = index;
        } else {
          filterView.push(element);
        }
      });

      console.log("selectedSlotIndex:", selectedSlotIndex);
      let concat = this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers.concat(this.SelectedTimeSlot.Customers[selectedSlotIndex]);
      console.log("concat:", concat);
      this.Days[droppedDayIndex].TimeSlots[droppedTimeslotIndex].Customers = concat;
      console.log("dropped customer:", this.Days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers[selectedSlotIndex]);
      console.log("filterView:", filterView);
      this.Days[this._selectedDayIndex].TimeSlots[this._selectedTimeSlotIndex].Customers = filterView;
    }
  }

  timeslotClicked(event: any, dayIndex: number, timeslotIndex: number) {
    if (this._selectedDayIndex > -1) {
      this.SelectedTimeSlot.OpenCustomers = false;
    }
    if ((this._selectedDayIndex != dayIndex)
      || (this._selectedTimeSlotIndex != timeslotIndex)) {
      this._selectedTimeSlotIndex = timeslotIndex;
      this._selectedDayIndex = dayIndex;
      this._selectCustomer = null;
      console.log('day slot selected because different');
    } else {
      console.log('day slot remain same');
    }
    this.SelectedTimeSlot.OpenCustomers = true;
  }

  toggleCustomerClicked(event: any, customer: DndCustomer) {
    this._selectCustomer = customer;
  }

  closePoorMansModal() {
    this._selectCustomer = null;
  }
}
