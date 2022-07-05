import './style.css';
import { TestRxjsUnsubscribe } from './cancellation-unsubscribe';
import { Observable } from 'rxjs';

const unsub$ = new TestRxjsUnsubscribe();
unsub$.unSub();
