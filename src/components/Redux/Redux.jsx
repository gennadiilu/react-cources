import React from 'react';
import PropTypes from 'prop-types';
// import Product from '../Product';
// import Button from '../Button';

const displayName = 'Redux';

const propTypes = {
  // myProducts: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string.isRequired
  //   }).isRequired
  // ).isRequired,
  // handleAddProduct: PropTypes.func.isRequired,
  // handleRemoveProduct: PropTypes.func.isRequired,
  // handleFetchProducts: PropTypes.func.isRequired,
  // changeName: PropTypes.func.isRequired,
  // name: PropTypes.string,
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string
};

const defaultProps = {
  // name: '',
  filter: ''
};

function Redux({
  // myProducts,
  filter,
  handleChangeFilter
  // handleAddProduct,
  // changeName,
  // name,
  // handleRemoveProduct,
  // handleFetchProducts
}) {
  return (
    <main>
      <div>
        Filter: 
        {' '}
        <input type="text" value={filter} onChange={handleChangeFilter} />
      </div>
      {/* <div>
        {myProducts.map (product => (
          <Product
            key={product.id}
            {...product}
            onRemove={handleRemoveProduct}
          />
        ))}
      </div>
      <div>
        <input type="text" value={name} onChange={changeName} />
        <Button
          text="Add Product"
          value="addProduct"
          onClick={handleAddProduct}
        />
      </div>
      <div>
        <Button
          data-qa="fetch-products"
          text="FETCH PRODUCTS"
          value="fetchProducts"
          onClick={handleFetchProducts}
        />
      </div> */}
    </main>
  );
}

Redux.displayName = displayName;
Redux.propTypes = propTypes;
Redux.defaultProps = defaultProps;

export default Redux;
