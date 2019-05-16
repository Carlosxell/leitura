import ReduxThunk from 'redux-thunk';
import { Reducers } from './reducers/reducers';
import { createStore, applyMiddleware } from 'redux';

export const Store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
