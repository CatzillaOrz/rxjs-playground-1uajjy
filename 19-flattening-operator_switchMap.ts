import { catchError, concatMap, fromEvent, map, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { unsubscibe } from './0-unSub';

/*
 ** concatMap (() => neverEndingObservable$ )
 ** This could cause Memery Release !!! should be fixed!!!
 ** Use { switchMap } when fetch Data
 ** Use { mergeMap } when fetch Multiple Data
 **
 ** Cancels / Unsubscribes [√]
 **
 ** Memory leaks not dangerous [√]
 **
 ** Quick reaction to new source values [√]
 **
 ** Order mostly safe [√]
 */

export class FlatteningOperatorSwithMap {
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
            // catchError(() => EMPTY) // should use catchError inside HTTP request Observable event
            catchError((err) => of('[error]:' + `${err}`))
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
  run() {
    this.create();
  }
}
