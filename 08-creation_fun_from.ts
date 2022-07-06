import { from } from 'rxjs';

/*
 ** {from}
 ** from([A,B,C])
 ** from(Promise)
 **
 */

export class CreateFuntionFrom {
  create() {
    const somePromise = new Promise((resolve, reject) => {
      // resolve('Resolved...');
      reject('Error: Rejected...');
    });
    from(somePromise).subscribe({
      next: (value) => {
        console.log('value:', value);
      },
      error: (error) => {
        console.log('[error]:', error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  createVserion01() {
    from(['Alice', 'Ben', 'Charlie']).subscribe({
      next: (value) => {
        console.log('value:', value);
      },
    });
  }

  run() {
    this.create();
  }
}
