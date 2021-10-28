import {ReduceAction, ReduceActor} from '@interfaces/context';
import {ReduceActionNames} from '@interfaces/enums/reduce-action-names';
import {GlobalApplicationState} from '@interfaces/global-application-state';

const ReduceActions: ReduceAction[] = [];

const findReducer = (action: ReduceActionNames) => ReduceActions.find(({name}) => name === action);

export const mainReducer = <T = any>(state: GlobalApplicationState, action: ReduceActor<T>) => {
  const act = ReduceActions.find(({name}) => name === action.name)?.fn;
  if (act)
    return act(state, action.payload);

  throw new Error(`Could not find reducer with name ${action.name}`);
}

export const addReducer = (reducer: ReduceAction<any>) => !findReducer(reducer.name) && ReduceActions.push(reducer) || false;
