import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Header';

const propTypes = {
  name: PropTypes.string.isRequired
};

export default function Header({ name }) {
  return (
    <h1>
      Hello,
      {name}
!
    </h1>
  );
}

Header.displayName = displayName;
Header.propTypes = propTypes;
