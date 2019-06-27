import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired
};

function Product({ id, name, handleRemove, isRemoved }) {
  return (
    name && (
      <div data-qa={`product-${id}`}>
        {name}
        -
        <Button text="Remove" onClick={handleRemove} value="removeProduct" />
        Removed - 
        {' '}
        {isRemoved ? 'true' : 'false'}
      </div>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
