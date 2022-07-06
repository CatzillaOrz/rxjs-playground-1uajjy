import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { CommonRandomUri } from './0-ConstConfig';

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

  run() {
    this.create();
  }
}
