import {ReduceActionNames} from '@interfaces/enums/reduce-action-names';
import {ReduceAction, ReduceActor} from '@interfaces/context';
import {GlobalApplicationState} from '@interfaces/global-application-state';

const reducer = (state: GlobalApplicationState, payload: string): GlobalApplicationState =>
  ({...state, currentAddress: payload})

export const ChangeCurrentAddress: ReduceAction<string> = {
  name: ReduceActionNames.changeCurrentAddress,
  fn: reducer
}

export const changeCurrentAddress = (payload: string): ReduceActor<string> => ({name: ReduceActionNames.changeCurrentAddress, payload});
