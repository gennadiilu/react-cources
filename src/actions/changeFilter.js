import { createAction } from 'redux-actions';

const changeFilter = createAction('CHANGE_FILTER', value => value);

export default changeFilter;
