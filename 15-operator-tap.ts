import { of, tap, map, filter } from 'rxjs';

export class OperatorTap {
  create() {
    of(1, 7, 3, 6, 2)
      .pipe(
        tap((value) => console.log('spy:', value)),
        filter((value) => value > 5),
        map((value) => value * 2)
      )
      .subscribe((subscriber) => {
        console.log('subscriber:', subscriber);
      });
  }
  run() {
    this.create();
  }
}
