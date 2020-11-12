import { Injectable } from '@angular/core';
import { MonthNavModel } from '../models';
import { MonthEnum } from '../enums';
import { CALENDAR_NAVIGATION_MONTHS } from '../const';

@Injectable()
export class CalendarService {
  navMonths: MonthNavModel[] = CALENDAR_NAVIGATION_MONTHS;

  getMothsBeforeMothIndex(
    date: Date,
    count = 5,
    countMonthsBefore = 5
  ): MonthNavModel[] {
    const monthList: MonthNavModel[] = [];
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    for (let i = 0; i < count; i++) {
      if (currentMonth - 1 < 0) {
        currentYear--;
        currentMonth = 11;
      } else {
        currentMonth--;
      }

      monthList.push(
        currentMonth === MonthEnum.JAN
          ? { title: currentYear.toString(), isYear: true }
          : this.navMonths[currentMonth]
      );
    }

    return monthList.reverse();
  }

  generNavMonths(
    date: Date,
    count = 30,
    monthsBeforeCurrent = 6
  ): MonthNavModel[] {
    const navMonths: MonthNavModel[] = [];
    date.setMonth(date.getMonth() - monthsBeforeCurrent);

    for (let i = 0; i < count; i++) {
      const currentMonthIndex = date.getMonth();
      navMonths.push(
        currentMonthIndex === 0
          ? { title: date.getFullYear().toString(), isYear: true }
          : this.navMonths[currentMonthIndex]
      );
      date.setMonth(currentMonthIndex + 1);
    }

    return navMonths;
  }
}
