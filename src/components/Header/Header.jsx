import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ name }) {
  return (
    <h1>
Hello,
      {name}
!
    </h1>
);
}

Header.displayName = 'Header';

Header.propTypes = {
  name: PropTypes.string.isRequired
};
