import { Map, fromJS } from 'immutable';
import products, { initialProductsState } from './products';

describe('Given the products reducer', () => {
  describe('when the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined
    };

    let currentProductsState = initialProductsState;
    let newState;

    beforeEach(() => {
      newState = products(currentProductsState, testAction);
    });

    describe('and the ADD_PRODUCT action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'ADD_PRODUCT';
        testAction.payload = { name: 'Product 1' };
      });

      it('should return a new state with the provided product', () => {
        expect(newState).toEqual(currentProductsState.push(Map({ id: -2, name: testAction.payload.name })));
      });
    });

    describe('and the REMOVE_PRODUCT action is dispatched', () => {
      beforeAll(() => {
        currentProductsState = initialProductsState.push(Map({ id: 111, name: 'Product 111' }));

        testAction.type = 'REMOVE_PRODUCT';
        testAction.payload = 111;
      });

      it('should return a new state without removed product', () => {
        expect(newState).toEqual(initialProductsState);
      });
    });

    describe('and the FETCH_PRODUCTS_FULFILLED action is dispatched', () => {
      beforeAll(() => {
        currentProductsState = initialProductsState;

        testAction.type = 'FETCH_PRODUCTS_FULFILLED';
        testAction.payload = {
          data: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]
        };
      });

      it('should return a new state with fetched products only', () => {
        expect(newState).toEqual(fromJS(testAction.payload.data));
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = '111';
      });

      it('should return the current state', () => {
        expect(newState).toBe(currentProductsState);
      });
    });
  });
});
