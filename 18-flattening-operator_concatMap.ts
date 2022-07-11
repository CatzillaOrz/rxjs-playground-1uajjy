import { concatMap, EMPTY, fromEvent, map, Observable, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { unsubscibe } from './0-unSub';

export class FlatteningOperatorConcatMap {
  create() {
    const endpointInput = document.getElementById('endpoint');
    const fetchButton = document.getElementById('concat_pipe_fetch');

    let subscription$ = fromEvent(fetchButton, 'click')
      .pipe(
        tap((value) => {
          console.log('[endpointInput]:', endpointInput['value']);
          console.log(value);
        }),
        map(() => endpointInput['value']),
        concatMap((value) =>
          ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
            catchError(() => EMPTY) // should use catchError inside HTTP request Observable event
          )
        )
        // catchError(() => EMPTY) // If use catchError it will Teardown when error & will unsubscribe the Observable!!!
      )
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => {
          console.log('error:', error);
        },
        complete: () => {
          console.log('subscription$ Teardown when error | completed :');
          unsubscibe([subscription$]);
        },
      });
  }
  createBase() {
    const source$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('A');
      }, 2000);
      setTimeout(() => {
        subscriber.next('B');
      }, 3000);
      return () => {
        subscriber.unsubscribe();
      };
    });
    const subscription$ = source$
      .pipe(concatMap((value) => of(1, 2)))
      .subscribe({
        next: (value) => {
          console.log('value:', value);
        },
      });
  }

  run() {
    this.create();
  }
}
