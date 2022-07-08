/*
 ** {combineLatest}
 ** combineLatest([A,B])
 **
 **
 */

export class CreationFunctionCombineLatest {
  create() {
    let conversionDropdown = document.getElementById('conversion-dropdown');
    conversionDropdown.addEventListener('input', (event) => {
      // do something...
      console.log('event:', event.target.value);
    });
  }

  run() {
    this.create();
  }
}
