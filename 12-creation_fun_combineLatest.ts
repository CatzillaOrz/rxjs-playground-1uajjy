/*
 ** {combineLatest}
 ** combineLatest([A,B])
 **
 **
 */

import { combineLatest } from 'rxjs';

export class CreationFunctionCombineLatest {
  create() {
    const conversionDropdown = document.getElementById('conversion-dropdown');
    const temperatureInput = document.getElementById('temperature-input');

    const temperatureInputEvent$ = formEvent(temperatureInput, 'input');

    const conversionInputEvent$ = formEvent(conversionDropdown, 'input');

    combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe(
      ([temperatureInputEvent, conversionDropdownEvent]) => {
        console.log(temperatureInputEvent.target.value);
        console.log(conversionDropdownEvent.target.value);
      }
    );
  }

  run() {
    this.create();
  }
}

function formEvent(temperatureInput: HTMLElement, arg1: string) {
  throw new Error('Function not implemented.');
}
