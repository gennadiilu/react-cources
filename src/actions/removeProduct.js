import { createAction } from 'redux-actions';

const removeProduct = createAction('REMOVE_PRODUCT', id => id);

export default removeProduct;
