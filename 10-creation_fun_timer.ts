import { timer } from 'rxjs';

export class CreateionFuntionTimer {
  create() {
    console.log('Timer:');
    timer(2000).subscribe({
      next: (value) => {
        console.log('value:', value);
      },
      complete: () => {
        console.log('completed...');
      },
    });
  }
  run() {
    this.create();
  }
}
