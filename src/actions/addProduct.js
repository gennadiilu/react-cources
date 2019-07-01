import { createAction } from 'redux-actions';

const addProduct = createAction('ADD_PRODUCT', name => ({ name }));

export default addProduct;
