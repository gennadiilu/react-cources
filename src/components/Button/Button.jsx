import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const displayName = 'Button';

const propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool
};

const defaultProps = {
  text: '',
  isActive: false
};

const StyledButton = styled.button.attrs({
  type: 'button'
})`
  border-style: ${props => (props.isActive ? 'inset' : 'outset')};
  border-color: ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

function Button({ text, ...rest }) {
  return <StyledButton {...rest}>{text}</StyledButton>;
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withRouter(Button);
