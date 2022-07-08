import { concatMap, Observable, of } from 'rxjs';

export class FlatteningOperatorConcatMap {
  create() {
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
    .pipe(
      concatMap(value => of(1,2))
    )
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
