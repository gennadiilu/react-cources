import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ProductTitleText } from '../Texts';
import ProductStyle from './ProductStyle';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

function Product({ id, name, handleRemove }) {
  return (
    <ProductStyle data-qa={`product-${id}`}>
      <ProductTitleText>{name}</ProductTitleText>
      <Button text="Remove" onClick={handleRemove} value="removeProduct" />
      {/* Removed - 
        {' '}
        {isRemoved ? 'true' : 'false'} */}
    </ProductStyle>
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
