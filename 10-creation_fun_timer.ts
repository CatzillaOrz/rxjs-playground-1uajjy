import { interval, timer } from 'rxjs';

/*
 ** cold observable:
 ** timer
 ** interval
 */

export class CreateionFuntionTimer {
  create() {
    const subsciption$ = interval(1000).subscribe({
      next: (value) => {
        console.log('value:', value);
      },
      complete: () => {
        console.log('completed...');
      },
      error: (error) => {
        console.log('error:', error);
      },
    });
    setTimeout(() => {
      subsciption$.unsubscribe();
      console.log('subsciption$.closed:', subsciption$.closed);
    }, 5000);
  }

  timer() {
    console.log('Timer:');
    const timer$ = timer(2000).subscribe({
      next: (value) => {
        console.log('value:', value);
      },
      complete: () => {
        console.log('completed...');
      },
    });
    setTimeout(() => {
      console.log('timer$.closed:', timer$.closed);
    }, 3000);
  }

  run() {
    this.create();
  }
}
