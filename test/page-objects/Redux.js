class Redux {
  static open() {
    browser.url('/redux');
  }

  static get buttonFetchProducts() {
    return '[data-qa="fetch-products"]';
  }

  static fetchProducts() {
    browser.click(this.buttonFetchProducts);
  }

  static product(id) {
    return browser.element(`[data-qa="product-${id}"]`);
  }
}

export default Redux;
