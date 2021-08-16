import {createStore} from 'redux';
import  {employee_reducer} from './reuducer'
import { applyMiddleware } from 'redux';
import {ThunkMiddleware} from 'redux-thunk';


// export const store = createStore(employee_reducer,
//     );
export const store = createStore(employee_reducer)


// export const store = createStore(employee_reducer)
export type RootState = ReturnType<typeof store.getState>

