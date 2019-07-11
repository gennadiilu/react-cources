import addProduct from './addProduct';

describe('Given the addProduct action', () => {
  let action;

  describe('when the action is called', () => {
    let name;

    beforeEach(() => {
      action = addProduct(name);
    });

    it('should have the ADD_PRODUCT type', () => {
      expect(action.type).toBe('ADD_PRODUCT');
    });

    describe('and name of a product is provided', () => {
      beforeAll(() => {
        name = 'Product 1';
      });

      it('should create payload with the provided product name', () => {
        expect(action.payload.name).toBe('Product 1');
      });
    });

    describe('and name of a product is not provided', () => {
      beforeAll(() => {
        name = null;
      });

      it('should create paylaod without the provided product name', () => {
        expect(action.payload.name).toBeNull();
      });
    });
  });
});
