import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { Injector } from '@angular/core';

export class SpinnerService {
  private spinner: NgxSpinnerService;

  constructor(injector: Injector) {
    this.spinner = injector.get(NgxSpinnerService);
  }

  protected wrapStreamWithSpinner<T>(
    stream: Observable<T>,
    spinnerName: string
  ): Observable<T> {
    return spinnerName ? this.skipThroughSpinnerWrap(stream, spinnerName) : stream;
  }

  protected skipThroughSpinnerWrap<T>(
    stream: Observable<T>,
    spinnerName: string,
    options?: Spinner
  ): Observable<T> {
    const mergedOptions = Object.assign(
      {
        zIndex: 1,
        fullScreen: false,
        type: 'ball-clip-rotate-multiple',
        color: '#656565',
        size: 'default',
        bdColor: 'rgba(0,0,0,0.04)',
      },
      options || {}
    );

    this.spinner.show(spinnerName, mergedOptions);
    return stream.pipe(
      tap(() => {
        this.spinner.hide(spinnerName);
      }),
      catchError((error) => {
        this.spinner.hide(spinnerName);

        return throwError(error);
      })
    );
  }
}
