import {ReduceActor} from '@interfaces/context';
import {Dispatch} from 'react';

interface ApplicationState {
  currentAddress?: string;
}

export interface GlobalApplicationState {
  state: ApplicationState;
  dispatch: (action: ReduceActor<any>) => Dispatch<ReduceActor<any>>,
}
