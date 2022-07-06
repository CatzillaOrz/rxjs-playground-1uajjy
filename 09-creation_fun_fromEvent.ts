/*
 ** {fromEvent}
 ** Dom EventTarget
 ** Node.js EventEmitter
 ** jQuery Events
 */

import { fromEvent } from 'rxjs';

export class CreationFuntionFromEvent {
  private triggerButton = document.querySelector('button#hello');
  create() {
    const subscription$ = fromEvent<MouseEvent>(
      this.triggerButton,
      'click'
    ).subscribe({
      next: (event) => {
        console.log('event:', event.type, event.x, event.y);
      },
      complete: () => {
        console.log('completed...');
      },
      error: (error) => {
        console.log('error:', error);
      },
    });
    setTimeout(() => {
      subscription$.unsubscribe();
    }, 5000);
  }
  run() {
    this.create();
  }
}
