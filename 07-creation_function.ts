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
      error: (e) => console.log(e),
    });
  }
  run() {
    this.create();
  }
}
