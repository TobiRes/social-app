import {CounterActions, DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/counter.action';

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0
}

export function counterReducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: action.payload
      };
    case DECREMENT_COUNTER:
    return {
      counter: action.payload
      };
    default:
      return state;
  }
}
