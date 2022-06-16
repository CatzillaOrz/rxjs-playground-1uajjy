import { Observable } from 'rxjs';

const Interval$ = new Observable<number>((subscriber) => {
  let counter = 1;
  const intervalId = setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 2000);
  return () => {
    clearInterval(intervalId);
  };
});

const subscription = Interval$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Unsubsecribe');
  subscription.unsubscribe();
}, 8000);
