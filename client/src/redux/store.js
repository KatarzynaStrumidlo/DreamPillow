import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer as authorsReducer } from './authorsRedux';
import { reducer as cartReducer } from './cartRedux';
import { reducer as paintingsReducer } from './paintingsRedux';
import { reducer as addOrderReducer } from './addOrderRedux';

// define reducers
const reducers = {
  authors: authorsReducer,
  paintings: paintingsReducer,
  cart: cartReducer,
  order: addOrderReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
