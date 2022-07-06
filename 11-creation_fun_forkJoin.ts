import { forkJoin, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { CommonRandomUri } from './0-ConstConfig';
import { unsubscibe } from './0-unSub';

/*
 ** {forkJoin}
 ** forkJoin([A,B])
 **
 */

export class CreationFunctionForkJoin {
  create() {
    const randomName$ = ajax(CommonRandomUri.RANDOM_NAME);
    const randomCity$ = ajax(CommonRandomUri.RANDOM_CITY);
    const randomFood$ = ajax(CommonRandomUri.RANDOM_FOOD);

    // randomName$.subscribe({
    //   next: (value) => {
    //     console.log('value:', value);
    //   },
    // });
    // randomCity$.subscribe({
    //   next: (value) => {
    //     console.log('value:', value);
    //   },
    // });
    // randomFood$.subscribe({
    //   next: (value) => {
    //     console.log('value:', value);
    //   },
    // });

    forkJoin([randomName$, randomCity$, randomFood$]).subscribe({
      next: ([nameAjax, cityAjax, foodAjax]: any[]) => {
        console.log(
          `${nameAjax.response.name} \n is from \n ${cityAjax.response.capital} \n and likes eat \n ${foodAjax.response.dish}`
        );
      },
    });
  }

  createError() {
    const a$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('A');
        subscriber.complete();
      }, 3000);
      return () => {
        console.log('a$ is Teardown!!');

        subscriber.unsubscribe();
      };
    });
    const b$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.error('Failure!');
        // subscriber.next('B');
        // subscriber.complete();
      }, 5000);
      return () => {
        console.log('b$ is Teardonw!!');
        subscriber.unsubscribe();
      };
    });
    const subscription$ = forkJoin([a$, b$]).subscribe({
      next: (value) => {
        console.log('value:', value);
      },
      error: (error) => {
        console.log('error:', error);
        unsubscibe([subscription$]);
      },
      complete: () => {
        console.log('unsubscribe forkJoin subscription:');
        unsubscibe([subscription$]);
      },
    });
  }

  run() {
    this.createError();
    // this.create();
  }
}
