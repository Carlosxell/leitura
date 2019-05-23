import { createStore, applyMiddleware } from 'redux';
import { createLogger  } from 'redux-logger';
import { Reducers } from '../reducers';

const applyMiddlewares = applyMiddleware(createLogger());

export const Store = createStore(Reducers, applyMiddlewares);
