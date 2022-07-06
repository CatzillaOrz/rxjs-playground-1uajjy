import { Observable } from 'rxjs';

export class HotObservable {
  create() {
    const helloButton = document.querySelector('button#hello');
    const helloClickObservor$ = new Observable((subscribe) => {
      helloButton.addEventListener('click', (event) => {
        subscribe.next(event);
      });
      setTimeout(() => {
        subscribe.error(new Error('Self Error'));
      }, 3000);
      return () => {
        console.log('Teardown When Error');
        subscribe.unsubscribe();
      };
    });
    const btnSubscription$ = helloClickObservor$.subscribe({
      next: (event) => {
        console.log(event);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log(new Date('yyyy-dd-mm'));
      },
    });
  }

  run() {
    this.create();
  }
}
