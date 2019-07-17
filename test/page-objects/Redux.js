class Redux {
  static open() {
    browser.url('/redux');
  }

  static get buttonFetchProducts() {
    return $('[data-qa="fetch-products"]');
  }

  static fetchProducts() {
    Redux.buttonFetchProducts.click();
  }

  static findProduct(id) {
    return $(`[data-qa="product-${id}"]`);
  }
}

export default Redux;
