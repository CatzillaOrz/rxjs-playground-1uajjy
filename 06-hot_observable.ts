import { Observable } from 'rxjs';
import { unsubscibe } from './0-unSub';

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
      }, 4000);
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
        console.log(new Date());
      },
    });

    setTimeout(() => {
      console.log('[Hot observable Executed after 5000 ms...]');
      const btnSubscription02$ = helloClickObservor$.subscribe({
        next: (event) => {
          console.log(event);
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
