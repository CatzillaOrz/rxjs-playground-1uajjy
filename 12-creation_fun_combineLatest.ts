/*
 ** {combineLatest}
 ** combineLatest([A,B])
 **
 **
 */

import { combineLatest, fromEvent } from 'rxjs';

export class CreationFunctionCombineLatest {
  create() {
    const conversionDropdown = document.getElementById('conversion-dropdown');
    const temperatureInput = document.getElementById('temperature-input');
    const resultBox = document.getElementById('result-text');

    const temperatureInputEvent$ = fromEvent(temperatureInput, 'input');

    const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');

    combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
      ([event0, event1]: any[]) => {
        const temperature = event0.target.value;
        const conversion = event1.target.value;
        let result: number;
        switch (conversion) {
          case 'f-to-c':
            result = ((temperature - 32) * 5) / 9;
            break;
          case 'c-to-f':
            result = (temperature * 9) / 5 + 32;
            break;
        }
        resultBox.innerHTML = String(result);
      }
    );
  }

  run() {
    this.create();
  }
}
