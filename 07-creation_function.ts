import { of } from 'rxjs';

/*
 ** Creation Functions
 ** {of}
 ** {from}
 ** {fromEvent}
 ** {interval/timer}
 ** {forkJoin}
 ** {combineLatest}
 */

export class CreationFunction {
  create() {
    of('Alice', 'Ben', 'Charlie').subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('[Completeed...]'),
      error: (err) => {
        console.log('err:', err);
      },
    });
  }
  run() {
    this.create();
  }
}
