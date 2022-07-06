import { from } from 'rxjs';

/*
 ** {from}
 ** from([A,B,C])
 ** from(Promise)
 **
 */

export class CreateFuntionFrom {
  create() {
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
