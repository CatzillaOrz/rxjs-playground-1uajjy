import { Observable } from 'rxjs';

export class CreateObserable {
  create() {
    const observable$ = new Observable<string>((subscriber) => {
      console.log('Observable executed');
      subscriber.next('Alice');
      subscriber.next('Ben');
      subscriber.next('Charlie');
    });

    const observer = {
      next: (value) => console.log(value),
    };

    observable$.subscribe(observer);
  }

  run() {
    this.create();
  }
}
