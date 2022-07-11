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
import { CreationFunctionCombineLatest } from './12-creation_fun_combineLatest';
import { OperatorFilter } from './13-operator-filter';
import { OperatorMap } from './14-operator-map';
import { OperatorTap } from './15-operator-tap';
import { OperatorDebounceTime } from './16-operator_debounceTime';
import { OperatorEmpty } from './17-operator_empty';
import { FlatteningOperatorConcatMap } from './18-flattening-operator_concatMap';
import { FlatteningOperatorConcurrencyConcatMap } from './19-flattening-operator_concurrency';

// runMyFun(RxjsUnsubscribe);

// runMyFun(CreateObserable);

// runMyFun(ObservableMulti);

// runMyFun(ColdObservableHttp);

// runMyFun(HotObservable);

// runMyFun(CreateFuntionFrom);

// runMyFun(CreationFuntionFromEvent);

// runMyFun(CreateionFuntionTimer);

// runMyFun(CreationFunctionForkJoin);

// runMyFun(CreationFunctionCombineLatest);

// runMyFun(OperatorFilter);

// runMyFun(OperatorMap);

// runMyFun(OperatorTap);

// runMyFun(OperatorDebounceTime);

// runMyFun(OperatorEmpty);

// runMyFun(FlatteningOperatorConcatMap);

runMyFun(FlatteningOperatorConcurrencyConcatMap);
