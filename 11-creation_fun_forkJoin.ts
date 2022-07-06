import { ajax } from 'rxjs/ajax';
import { CommonRandomUri } from './0-ConstConfig';

export class CreationFunctionForkJoin {
  create() {
    const randomName$ = ajax(CommonRandomUri.RANDOM_NAME);
    const randomCity$ = ajax(CommonRandomUri.RANDOM_CITY);
    const randomFood$ = ajax(CommonRandomUri.RANDOM_FOOD);

    randomName$.subscribe({
      next: (value) => {
        console.log('value:', value);
      },
    });
    randomCity$.subscribe({
      next: (value) => {
        console.log('value:', value);
      },
    });
    randomFood$.subscribe({
      next: (value) => {
        console.log('value:', value);
      },
    });
  }

  run() {
    this.create();
  }
}
