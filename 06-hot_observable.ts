import { Observable } from 'rxjs';
import { unsubscibe } from './0-unSub';

/*
 ** Hot Observable
 ** @param DOM Event
 ** @param State(ngrx,Redux...)
 ** @param Subjects
 **
 */

export class HotObservable {
  create() {
    const helloButton = document.querySelector('button#hello');
    const helloClickObservor$ = new Observable((subscribe) => {
      helloButton.addEventListener('click', (event) => {
        subscribe.next(event);
      });
      setTimeout(() => {
        subscribe.error(new ErrorEvent('Self Error'));
      }, 3000);
      setTimeout(() => {
        subscribe.complete();
      }, 2000); // TODO: change to 2000ms will Complete & Teardown In [btnSubscription02$] as Same
      return () => {
        console.log('Teardown When Error Or Complete!');
        subscribe.unsubscribe();
      };
    });
    const btnSubscription$ = helloClickObservor$.subscribe({
      next: (event) => {
        console.log(event);
      },
      error: (err) => {
        console.log(err);
        unsubscibe([btnSubscription$]);
      },
      complete: () => {
        console.log(
          '[Case1]: 2000ms will Complete & Teardown In [btnSubscription02$]'
        );
        console.log(new Date());
      },
    });

    setTimeout(() => {
      console.log('[Case2: Hot observable Executed after 5000 ms...]');
      console.log(
        '[Case2: Will replay all the subscription all over again...]'
      );
      const btnSubscription02$ = helloClickObservor$.subscribe({
        next: (event) => {
          console.log(event);
        },
        complete: () => {
          console.log(
            '[Case1]: 2000ms will Complete & Teardown In [btnSubscription02$] As Same'
          );
          console.log(new Date());
        },
        error: (err) => {
          console.log(err);
          unsubscibe([btnSubscription02$]);
        },
      });
    }, 5000);
  }

  run() {
    this.create();
  }
}
