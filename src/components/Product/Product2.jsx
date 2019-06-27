import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired
};

function Product2({ id, name, handleRemove }) {
  return (
    name && (
      <div data-qa={`product-${id}`}>
        {name}
        -
        <Button text="Remove" onClick={handleRemove} value="removeProduct" />
      </div>
    )
  );
}

Product2.displayName = displayName;
Product2.propTypes = propTypes;

export default Product2;
