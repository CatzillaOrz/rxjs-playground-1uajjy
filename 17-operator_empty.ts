import { Observable, of, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class OperatorEmpty {
  create() {
    const observable$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.error(new Error('Timeout!'));
      }, 3000);
    });

    const subscription$ = observable$
      .pipe(
        //app will crash still
        // catchError((err) => of('Unknown Error!!!'))
        // app will not crash and stop  {next:}
        catchError((err) => EMPTY)
      )
      .subscribe({
        next: (value) => {
          console.log('value:', value);
        },
        // without {error:} app will crash down!!! But if pipe(catchError with EMPTY no need to add {error:})
        // error: (err) => {
        //   console.log('err:', err);
        // },
      });
  }
  run() {
    this.create();
  }
}
