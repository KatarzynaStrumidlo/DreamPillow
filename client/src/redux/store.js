import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer as materialsReducer } from './materialsRedux';
import { reducer as examplesReducer } from './examplesRedux';
import { reducer as typesReducer } from './typesRedux';

// define reducers
const reducers = {
  materials: materialsReducer,
  examples: examplesReducer,
  types: typesReducer,
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
