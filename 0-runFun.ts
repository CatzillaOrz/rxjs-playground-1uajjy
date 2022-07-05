export function runMyFun(myClass?: any) {
  if (!myClass) return;
  new myClass().run();
}
