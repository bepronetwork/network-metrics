import {createContext} from 'react';
import {GlobalApplicationState} from '@interfaces/global-application-state';

const defaultState = {
  state: {},
  dispatch: () => null,
};

export const ApplicationContext = createContext<GlobalApplicationState>(defaultState);

export default function ApplicationContextProvider({children}) {

}
