import { concatMap, fromEvent, map, Observable, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export class FlatteningOperatorConcatMap {
  create() {
    const endpointInput = document.getElementById('endpoint');
    const fetchButton = document.getElementById('concat_pipe_fetch');

    fromEvent(fetchButton, 'click')
      .pipe(
        tap((value) => {
          console.log(endpointInput.value);
          console.log(value);
        }),
        map(() => endpointInput['value']),
        concatMap((value) =>
          ajax(`http://random-data-api.com/api/${value}/random_${value}`)
        )
      )
      .subscribe((value) => console.log(value));
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
