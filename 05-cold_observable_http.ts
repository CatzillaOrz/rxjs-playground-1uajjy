import { ajax } from 'rxjs/ajax';
import { CommonRandomUri } from './0-ConstConfig';
import { unsubscibe } from './0-unSub';

export class ColdObservableHttp {
  create() {
    const randomNameUrl = CommonRandomUri.RANDOM_NAME;
    const ajaxSubscription$ = ajax(randomNameUrl).subscribe({
      next: (data) => console.log(data),
      complete: () => unsubscibe([ajaxSubscription$]),
      error: (err) => {
        console.log(err);
        unsubscibe([ajaxSubscription$]);
      },
    });
  }
  run() {
    this.create();
    this.create();
    this.create();
  }
}
