import {
  List,
  Map
  // fromJS
} from 'immutable';
import { handleActions } from 'redux-actions';
// import {FULFILLED} from 'redux-promise-middleware';
import addProduct from '../actions/addProduct';

let id = -1;

export const initialProductsState = List([Map({ id: 1, name: 'Ball' })]);

const products = handleActions(
  {
    [addProduct]: (state, action) => {
      id -= 1;

      return state.push(Map({ id, ...action.payload }));
    }
    // [removeProduct]: (state, {payload}) =>
    //  state.remove (state.findIndex (p => p.get ('id') === payload)),
    // [`${fetchProducts}_${FULFILLED}`]: (state, {payload: {data}}) =>
    //  fromJS (data),
  },
  initialProductsState
);

export default products;
