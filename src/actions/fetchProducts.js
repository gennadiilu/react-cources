import axios from 'axios';
import { createAction } from 'redux-actions';
import getUserInfo from '../selectors/getUserInfo';

const payloadCreator = userId =>
  axios.get('http://localhost:2000/v1/products', {
    headers: { 'X-User-Id': userId }
  });

const fetchProductsAsync = createAction('FETCH_PRODUCTS', payloadCreator);

const fetchProducts = () => (dispatch, getState) => dispatch(fetchProductsAsync(getUserInfo(getState()).get('userId')));

fetchProducts.toString = fetchProductsAsync.toString;

export default fetchProducts;
