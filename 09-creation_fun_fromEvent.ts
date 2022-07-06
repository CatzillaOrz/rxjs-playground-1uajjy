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
    fromEvent<MouseEvent>(this.triggerButton, 'click').subscribe((event) => {
      console.log('event:', event.type, event.x, event.y);
    });
  }
  run() {
    this.create();
  }
}
