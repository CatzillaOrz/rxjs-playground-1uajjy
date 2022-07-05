import { Observable, Subscription } from 'rxjs';
import { subscribeToArray } from 'rxjs/internal/util/subscribeToArray';
import { unsubscibe } from './0-unSub';

export class ObservableMulti {
  create() {
    return new Observable<string>((subscriber) => {
      console.log('Observable executed');
      subscriber.next('Alice');
      setTimeout(() => subscriber.next('Ben'), 2000);
      setTimeout(() => subscriber.next('Charlie'), 4000);
      setTimeout(() => subscriber.complete(), 4500);
    });
  }
  run() {
    // Each subscription is independent
    const observable$ = this.create();
    // subscriber 1
    console.log('Subscription1 starts');
    const subscription01 = observable$.subscribe(
      (value) => console.log('Subscription01', value),
      (err) => {},
      () => {
        console.log('Subscription01 Complete');
        unsubscibe([subscription01]);
      }
    );
    // subscriber 2
    setTimeout(() => {
      console.log('Subscription2 starts');
      const subscription02 = observable$.subscribe(
        (value) => console.log('Subscription02', value),
        (err) => {},
        () => {
          console.log('Subscription02 Complete!');
          unsubscibe([subscription02]);
        }
      );
    }, 1000);
  }
}
