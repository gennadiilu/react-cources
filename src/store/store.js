import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
// import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import products, { initialProductsState } from './products';
import filter, { initialFilterState } from './filter';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

export const initialStoreState = Map({
  filter: initialFilterState,
  products: initialProductsState
});

const store = createStore(
  combineReducers({
    // userInfo,
    filter,
    products
  }),
  initialStoreState,
  enhancer
);

export default store;
