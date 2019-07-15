import Redux from '../../page-objects/Redux';

describe('Given the Redux page is opened', () => {
  beforeEach(() => {
    Redux.open();
    browser.waitForExist(Redux.buttonFetchProducts);
  });

  describe('when the FetchProducts button is clicked', () => {
    beforeEach(() => {
      browser.pause(1000);

      browser.click(Redux.buttonFetchProducts);
    });

    it('should load products from backend', () => {
      browser.pause(1000);

      browser.saveScreenshot('./shots/fetchProducts.png');

      expect(Redux.product(1)).toBeDefined();
    });
  });
});
