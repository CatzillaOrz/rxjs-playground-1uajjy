import './style.css';
import { runMyFun } from './0-runFun';
import { CreateObserable } from './01-observable_create';
import { ObservableMulti } from './02-observable_multi';
import { RxjsUnsubscribe } from './04-cancellation_unsubscribe';
import { ColdObservableHttp } from './05-cold_observable_http';
import { HotObservable } from './06-hot_observable';

// runMyFun(RxjsUnsubscribe);

// runMyFun(CreateObserable);

// runMyFun(ObservableMulti);

// runMyFun(ColdObservableHttp);

runMyFun(HotObservable);
