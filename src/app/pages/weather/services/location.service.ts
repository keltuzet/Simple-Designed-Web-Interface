import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WFCoordinationModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(@Inject(DOCUMENT) private document: HTMLDocument) {}

  getGeolocation(options?: PositionOptions): Observable<Position> {
    return new Observable((subscriber) => {
      navigator.geolocation.getCurrentPosition(
        (pos: Position) => subscriber.next(pos),
        (err: PositionError) => subscriber.error(err),
        options
      );
    });
  }

  getСoordinates(options?: PositionOptions): Observable<WFCoordinationModel> {
    return new Observable((subscriber) => {
      navigator.geolocation.getCurrentPosition(
        (pos: Position) => {
          subscriber.next({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        },
        (err: PositionError) => subscriber.error(err),
        options
      );
    });
  }
}
