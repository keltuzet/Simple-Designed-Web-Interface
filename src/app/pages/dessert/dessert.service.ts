import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { INutritionalValueViewModel } from '../../shared/models';
import { DessertsData } from '../../shared/data';
import { SpinnerService } from '../../shared/services';
import { SPINNER_NAMES } from '../../shared/const';

@Injectable()
export class DessertService extends SpinnerService {
  private stage: INutritionalValueViewModel[] = DessertsData;

  constructor(injector: Injector) {
    super(injector);
  }

  getDesserts(): Observable<INutritionalValueViewModel[]> {
    return this.skipSpinner(
      of(this.stage).pipe(delay(0)),
      SPINNER_NAMES.DESSERT_TABLE
    );
  }

  addDessert(dessert: INutritionalValueViewModel): Observable<number> {
    const id = Math.max(...this.stage.map((el) => el.id)) + 1;
    const data: INutritionalValueViewModel = { id, ...dessert };
    this.stage.push(dessert);
    return of(id);
  }

  editDessert(dessert: INutritionalValueViewModel): Observable<void> {
    this.stage[this.stage.findIndex((el) => el.id === dessert.id)] = dessert;
    this.stage.push(dessert);
    return of();
  }

  deleteDessert(id: number): Observable<void> {
    this.stage.splice(
      this.stage.findIndex((el) => el.id === id),
      1
    );
    return of();
  }
}
