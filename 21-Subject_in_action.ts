import { fromEvent, map, Subject } from 'rxjs';

export class SubjectMultiCastingInAction {
  create() {
    const emitButton = document.getElementById('emit');
    const subscribeButton = document.getElementById('subscribe');
    const inputValue = document.getElementById('value-input');

    const value$ = new Subject<string>();

    fromEvent(emitButton, 'click')
      .pipe(map(() => inputValue['value']))
      .subscribe(value$);

    fromEvent(subscribeButton, 'click').subscribe({
      next: () => {
        console.log('Create New Subscription:');
        value$.subscribe((valueNew) => {
          console.log('valueNew:', valueNew);
        });
      },
    });
  }

  run() {
    this.create();
  }
}
