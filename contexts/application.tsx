import {createContext, ReactNode, useReducer} from 'react';
import {Context} from '@interfaces/context';
import {GlobalApplicationState} from '@interfaces/global-application-state';
import ApplicationState from '@contexts/default-states/application-state';
import {mainReducer} from '@reducers/main';

const defaultContextState: Context<GlobalApplicationState> = {
  state: ApplicationState,
  dispatch: () => null,
}

export const ApplicationContext = createContext<Context<Partial<GlobalApplicationState>>>(defaultContextState)

export default function ApplicationContextProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(mainReducer, defaultContextState.state);

  return <ApplicationContext.Provider value={{state, dispatch: dispatch as any}}>{children}</ApplicationContext.Provider>
}
