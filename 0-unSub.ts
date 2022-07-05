import { Subscription } from 'rxjs';

export function unsubscibe(array: Array<Subscription>) {
  array.forEach((e, i) => {
    console.log('Unsubscribe Count Index:' + i);
    e.unsubscribe();
  });
}
