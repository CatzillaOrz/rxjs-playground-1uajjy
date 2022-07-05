import { Observable } from 'rxjs';

export class CreateObserable {
  create() {
    return new Observable<string>((subscriber) => {
      console.log('Observable executed');
      subscriber.next('Alice');
      setTimeout(() => subscriber.next('Ben'), 2000);
      setTimeout(() => subscriber.next('Charlie'), 4000);
      return () => {
        // Teardonw
        console.log('Self Teardonw');
        subscriber.unsubscribe();
      };
    });
  }

  runVersion01() {
    // new Observable =>  def Subseriber
    const observable$ = this.create();
    // new Observor Object
    const observer = {
      next: (value) => console.log(value),
    };
    //run Subscribe
    observable$.subscribe(observer);
  }

  runVersion02() {
    //Simplify run subscribe
    const observable$ = this.create();
    observable$.subscribe((value) => console.log(value));
  }

  run() {
    // try run unsubscribe by using Create subscription * & run
    const observable$ = this.create();
    const subscription = observable$.subscribe((value) => console.log(value));
    setTimeout(() => {
      console.log('Unsubscription');
      subscription.unsubscribe();
    }, 3000);
  }
}
