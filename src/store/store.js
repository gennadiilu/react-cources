import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import products, { initialProductsState } from './products';
import filter, { initialFilterState } from './filter';
import userInfo, { initialUserInfoState } from './userInfo';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promise));

export const initialStoreState = Map({
  userInfo: initialUserInfoState,
  filter: initialFilterState,
  products: initialProductsState
});

const store = createStore(
  combineReducers({
    userInfo,
    filter,
    products
  }),
  initialStoreState,
  enhancer
);

export default store;
