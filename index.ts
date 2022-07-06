import './style.css';
import { runMyFun } from './0-runFun';
import { CreateObserable } from './01-observable_create';
import { ObservableMulti } from './02-observable_multi';
import { RxjsUnsubscribe } from './04-cancellation_unsubscribe';
import { ColdObservableHttp } from './05-cold_observable_http';
import { HotObservable } from './06-hot_observable';
import { CreationFunction } from './07-creation_function_of';
import { CreateFuntionFrom } from './08-creation_fun_from';
import { CreationFuntionFromEvent } from './09-creation_fun_fromEvent';
import { CreateionFuntionTimer } from './10-creation_fun_timer';
import { CreationFunctionForkJoin } from './11-creation_fun_forkJoin';

// runMyFun(RxjsUnsubscribe);

// runMyFun(CreateObserable);

// runMyFun(ObservableMulti);

// runMyFun(ColdObservableHttp);

// runMyFun(HotObservable);

// runMyFun(CreateFuntionFrom);

// runMyFun(CreationFuntionFromEvent);

// runMyFun(CreateionFuntionTimer);

runMyFun(CreationFunctionForkJoin);
