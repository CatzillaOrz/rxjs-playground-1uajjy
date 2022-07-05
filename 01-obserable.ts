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

  run() {
    // new Observable =>  def Subseriber
    const observable$ = this.create();
    // new Observor Object
    const observer = {
      next: (value) => console.log(value),
    };
    //run Subscribe
    observable$.subscribe(observer);
  }
}
