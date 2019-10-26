import {Action} from '@ngrx/store';

export const INCREMENT_COUNTER = '[CounterAction] Increment Counter';
export const DECREMENT_COUNTER = '[CounterAction] Decrement Counter';

export class IncrementAction implements Action {
  readonly type = INCREMENT_COUNTER;

  constructor(public payload: number) {
  }
}

export class DecrementAction implements Action {
  readonly type = DECREMENT_COUNTER;

  constructor(public payload: number) {
  }
}



export type CounterActions =
  IncrementAction
  | DecrementAction;
