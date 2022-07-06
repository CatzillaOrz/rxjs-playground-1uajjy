import { timer } from 'rxjs';

export class CreateionFuntionTimer {
  create() {
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
