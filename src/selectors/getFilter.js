import { createSelector } from 'reselect';

const getFilter = createSelector(
  state => state.get('filter'),
  filter => filter
);

export default getFilter;
