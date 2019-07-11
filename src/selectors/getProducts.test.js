import { fromJS } from 'immutable';
import getProducts from './getProducts';

describe('Given the getProducts selector', () => {
  let currentStoreState = fromJS({
    products: [{ id: 1, name: '111' }, { id: 2, name: '222' }],
    filter: undefined
  });

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getProducts(currentStoreState);
    });

    describe('and the filter is specified in the store', () => {
      beforeAll(() => {
        currentStoreState = currentStoreState.setIn(['filter'], '11');
      });

      it('should return products from the store by the specified filter', () => {
        expect(result.equals(fromJS([{ id: 1, name: '111' }]))).toBe(true);
      });
    });

    describe('and the is no filter in the store', () => {
      beforeAll(() => {
        currentStoreState = currentStoreState.setIn(['filter'], undefined);
      });

      it('should return all products from the store', () => {
        expect(result.equals(currentStoreState.getIn(['products']))).toBe(true);
      });
    });
  });
});
