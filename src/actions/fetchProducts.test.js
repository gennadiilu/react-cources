import { Map } from 'immutable';
import fetchProducts from './fetchProducts';

jest.mock('axios', () => ({
  get: jest.fn((url, config) => ({ url, config }))
}));

describe('Given the fetchProducts action', () => {
  describe('when the action is called', () => {
    let thunk;

    beforeEach(() => {
      thunk = fetchProducts();
    });

    it('should return a thunk function', () => {
      expect(thunk).toBeInstanceOf(Function);
    });

    describe('and the thunk is called', () => {
      let dispatchMock;
      let getStateMock;
      let action;

      beforeEach(() => {
        dispatchMock = jest.fn(_ => _);
        getStateMock = jest.fn(() => Map({ userInfo: Map({ userId: 111 }) }));

        action = thunk(dispatchMock, getStateMock);
      });

      it('should get userId from store', () => {
        expect(getStateMock).toHaveBeenCalledTimes(1);
      });

      it('should dispatch the FETCH_PRODUCTS async action', () => {
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(action).toEqual({
          type: 'FETCH_PRODUCTS',
          payload: {
            url: 'http://localhost:2000/v1/products',
            config: {
              headers: { 'X-User-Id': 111 }
            }
          }
        });
      });
    });
  });
});
