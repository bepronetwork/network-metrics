import {Dispatch} from 'react';
import {ReduceActionNames} from '@interfaces/enums/reduce-action-names';
import {GlobalApplicationState} from '@interfaces/global-application-state';

export interface ReduceAction<Payload = Partial<GlobalApplicationState>> {
  name: ReduceActionNames;
  fn: (currentState: GlobalApplicationState, payload: Payload) => GlobalApplicationState,
}

export type ReduceActor<Payload = Partial<GlobalApplicationState>> = Pick<ReduceAction, 'name'> & {payload: Payload};

export interface Context<State = any> {
  state: State;
  dispatch: (action: ReduceActor) => Dispatch<ReduceActor<State>>|null
}
