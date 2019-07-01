import { handleActions } from 'redux-actions';
import changeFilter from '../actions/changeFilter';

export const initialFilterState = '';

const filter = handleActions(
  {
    [changeFilter]: (state, { payload }) => payload
  },
  initialFilterState
);

export default filter;
