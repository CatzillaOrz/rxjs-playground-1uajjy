import { Observable } from 'rxjs';

export class CreateObserable {
  create() {
    return new Observable<string>((subscriber) => {
      console.log('Observable executed');
      subscriber.next('Alice');
      subscriber.next('Ben');
      subscriber.next('Charlie');
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

  run() {
    //Simplify run subscribe
    const observable$ = this.create();
    observable$.subscribe((value) => console.log(value));
  }
}
