import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { Injector } from '@angular/core';

export class SpinnerService {
  private spinner: NgxSpinnerService;

  constructor(private injector: Injector) {
    this.spinner = this.injector.get(NgxSpinnerService);
  }

  protected wrappSpinner<T>(stream: Observable<T>, spinnerName: string) {
    return spinnerName ? this.skipSpinner(stream, spinnerName) : stream;
  }

  protected skipSpinner<T>(
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
