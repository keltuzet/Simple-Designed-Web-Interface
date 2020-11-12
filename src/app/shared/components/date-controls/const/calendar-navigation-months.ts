import { clone } from 'lodash';
import { MonthNavModel } from '../models';

export const CALENDAR_NAVIGATION_MONTHS: MonthNavModel[] = [
  {
    title: 'CALENDAR.MONTHS.SHORT.JAN',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.FEB',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.MAR',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.APR',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.MAY',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.JUN',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.JUL',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.AUG',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.SEP',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.OCT',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.NOV',
  },
  {
    title: 'CALENDAR.MONTHS.SHORT.DEC',
  },
];

interface NavigationTreeNode<T> {
  value: T;
  previous?: NavigationTreeNode<T> | null;
  next?: NavigationTreeNode<T> | null;
}

export class NavigationTree<T> {
  all: NavigationTreeNode<T>[] = [];
  first: NavigationTreeNode<T>;
  last: NavigationTreeNode<T>;
  current: NavigationTreeNode<T>;
  origin: T[];
  constructor(elements: T[]) {
    origin = clone(elements);

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < elements.length; i++) {
      let node: NavigationTreeNode<T>;

      if (i === 0) {
        node = {
          value: elements[i],
          previous: null,
        };
        this.all[i] = node;
        this.current = node;
        this.first = node;
        continue;
      }

      if (i === elements.length) {
        node = {
          value: elements[i],
          next: null,
        };
        this.all[i] = node;
        this.all[i - 1].next = node;
        this.last = node;
        continue;
      }

      node = {
        value: elements[i],
        previous: this.all[i - 1],
      };
      this.all[i] = node;
      this.all[i - 1].next = node;
    }
  }

  getAllNext(
    el: T,
    previous: T = null,
    next: T = null
  ): NavigationTreeNode<T>[] {
    return;
  }
}
