import { forkJoin, map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { CommonRandomUri } from './0-ConstConfig';
import { unsubscibe } from './0-unSub';

/*
 ** {forkJoin}
 ** forkJoin([A,B])
 **
 */

export class OperatorMap {
  create() {
    const randomName$ = ajax(CommonRandomUri.RANDOM_NAME).pipe(
      map((e: any) => e.response.first_name)
    );
    const randomCity$ = ajax(CommonRandomUri.RANDOM_CITY).pipe(
      map((e: any) => e.response.capital)
    );
    const randomFood$ = ajax(CommonRandomUri.RANDOM_FOOD).pipe(
      map((e: any) => e.response.dish)
    );

    forkJoin([randomName$, randomCity$, randomFood$]).subscribe({
      next: ([name, capital, dish]: any[]) => {
        console.log(
          `${name} \n is from \n ${capital} \n and likes eat \n ${dish}`
        );
      },
    });
  }

  run() {
    this.create();
  }
}
