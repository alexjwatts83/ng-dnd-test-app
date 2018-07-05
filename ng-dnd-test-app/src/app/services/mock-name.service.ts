import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockNameService {
  lastNames: any[] = [
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

  firstNames: any[] = [
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

  private _showRooms: string[] = [
    'Freedom Newcastle',
    'Freedom Erina',
    'Freedom Gosford',
    'Kinsman Newcastle',
    'Kinsman Erina',
    'Kinsman Gosford',
  ];

  private _designers: string[];
  private _consultants: string[];

  private _lastShowroomIndex:number;
  private _lastDesignerIndex:number;
  private _lastConsultantIndex:number;

  constructor() { 
    this._lastShowroomIndex = -1;
    this._lastDesignerIndex = -1;
    this._lastConsultantIndex = -1;
    this._designers = [];
    this._consultants = [];
console.log('stuff');
    for(let i = 1; i <= 10; i++){
      this._designers.push('Designer ' + i);
      this._consultants.push('Consultant ' + i);
    }
  }

  getShowroom():string{
    this._lastShowroomIndex = this._lastShowroomIndex+1;
    if(this._lastShowroomIndex == this._showRooms.length){
      this._lastShowroomIndex = 0;
    }
    
    return this._showRooms[this._lastShowroomIndex];
  }

  getDesigner():string{
    this._lastDesignerIndex = this._lastDesignerIndex+1;
    if(this._lastDesignerIndex == this._designers.length){
      this._lastDesignerIndex = 0;
    }
    
    return this._designers[this._lastDesignerIndex];
  }

  getConsultant():string{
    this._lastConsultantIndex = this._lastConsultantIndex+1;
    if(this._lastConsultantIndex == this._consultants.length){
      this._lastConsultantIndex = 0;
    }
    
    return this._consultants[this._lastConsultantIndex];
  }

  createUnscheduledJobs():void{
        //   for (let j = 0; j < 5; j++) {
    //     this.unschduledJobs.push(this.calendarDataService.createCustomer(startingPoint + 0, 'Gosford', '2250'));
    //     startingPoint++;
    //   }
    //   for (let j = 0; j < 5; j++) {
    //     this.unschduledJobs.push(this.calendarDataService.createCustomer(startingPoint + 0, 'Erina', '2250'));
    //     startingPoint++;
    //   }
    //   for (let j = 0; j < 5; j++) {
    //     this.unschduledJobs.push(this.calendarDataService.createCustomer(startingPoint + 0, 'Newcastle', '2300'));
    //     startingPoint++;
    //   }
  }
}
