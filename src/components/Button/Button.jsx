import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../themes';

const displayName = 'Button';

const propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool
};

const defaultProps = {
  text: '',
  isActive: false
};

function Button({ text, isActive, ...rest }) {
  return (
    <ThemeContext.Consumer>
      {value => (
        <button
          type="button"
          {...rest}
          style={{
            borderStyle: isActive ? 'inset' : 'outset',
            borderColor: value.borderColor,
            borderRadius: value.borderRadius
          }}
        >
          {text}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withRouter(Button);
