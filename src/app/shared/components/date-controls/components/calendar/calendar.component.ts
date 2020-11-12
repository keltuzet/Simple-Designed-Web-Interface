import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { Subject } from 'rxjs';
import { MonthNavModel } from '../../models';
import { CalendarService } from '../../services';

type NavigationDate = {
  date: string,
  year: boolean
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  _value = new Date('2020-10-28');
  set value(vl: Date) {
    this._value = vl;
  }
  get value(): Date {
    return this._value;
  }
  _navTranslate = 40596;

  get navTranslate(): string {
    return `translateY(${this._navTranslate}px)`;
  }

  navMonths: MonthNavModel[];
  navigationDateList$ = new Subject<NavigationDate[]>();

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.navMonths = this.calendarService.generNavMonths(this.value);
  }

  initNav() {
    const month = this.value.getMonth();
    if (month === 0) {

    }
  }

  handleScrollNav(event: Event) {
    console.log(event);
  }
}
