import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export class OperatorDebounceTime {
  create() {
    const sliderInput = document.getElementById('customRange1');
    fromEvent(sliderInput, 'input')
      .pipe(debounceTime(2000))
      .subscribe((observeer: any) => {
        console.log(observeer.target.value);
      });
  }

  run() {
    this.create();
  }
}
