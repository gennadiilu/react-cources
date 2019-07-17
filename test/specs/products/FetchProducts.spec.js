import Redux from '../../page-objects/Redux';

describe('Given the Redux page is opened', () => {
  beforeEach(() => {
    Redux.open();
    Redux.buttonFetchProducts.waitForExist();
  });

  describe('when the FetchProducts button is clicked', () => {
    beforeEach(() => {
      browser.pause(1000);

      Redux.fetchProducts();
    });

    it('should load products from backend', () => {
      browser.pause(1000);

      browser.saveScreenshot('./shots/fetchProducts.png');

      expect(Redux.findProduct(1)).toBeDefined();
    });
  });
});
