import { createSelector } from 'reselect';
import getFilter from './getFilter';

const getProducts = createSelector(
  state => state.get('products'),
  getFilter,
  (products, filter) =>
    filter
      ? products.filter(p =>
          p
            .get('name')
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
      : products
);

export default getProducts;
