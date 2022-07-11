/*
 **
 ** Behavior Subject
 **
 ** set Default vale [√]
 **
 */

import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

export class SubjectBehavior {
  create() {
    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('logout');
    const loggedInStatus = document.getElementById('login-status');
    const listeningButton = document.getElementById('listening');

    const isLoggedIn$ = new BehaviorSubject<boolean>(false);

    fromEvent(loginButton, 'click').subscribe(() => {
      isLoggedIn$.next(true);
    });
    fromEvent(logoutButton, 'click').subscribe(() => {
      isLoggedIn$.next(false);
    });

    // navigation status Behavior:
    isLoggedIn$.subscribe((value) => {
      loggedInStatus.innerHTML = value.toString();
    });

    //buttons behaviors:
    isLoggedIn$.subscribe((value) => {
      loginButton.style.display = !value ? 'block' : 'none';
      logoutButton.style.display = value ? 'block' : 'none';
    });

    fromEvent(listeningButton, 'click')
      .pipe(withLatestFrom(isLoggedIn$))
      .subscribe(([event, value]) => {
        console.log('listening:', value);
        console.log('event:', event);
      });
  }

  run() {
    this.create();
  }
}
