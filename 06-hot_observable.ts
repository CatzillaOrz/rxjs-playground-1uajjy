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
      }, 1000);
      setTimeout(() => {
        subscribe.complete();
      }, 2000);
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
  }

  run() {
    this.create();
  }
}
