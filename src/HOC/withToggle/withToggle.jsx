import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  toggled: PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  toggled: false,
  onClick: undefined
};

function withToggle(WrappedComponent) {
  const displayName = `WithToggle(${WrappedComponent.displayName})`;

  class WithToggle extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isToggled: props.toggled };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      const { onClick } = this.props;

      // Call a passed handler if any.
      if (onClick) {
        onClick(event);
      }

      this.setState(prevState => ({ isToggled: !prevState.isToggled }));
    }

    render() {
      // Destructure toggled and onClick because we do not pass them into the WrappedComponent.
      const { toggled, onClick, ...rest } = this.props;
      const { isToggled } = this.state;

      return <WrappedComponent onClick={this.handleClick} isActive={isToggled} {...rest} />;
    }
  }

  WithToggle.displayName = displayName;
  WithToggle.propTypes = propTypes;
  WithToggle.defaultProps = defaultProps;

  return WithToggle;
}

export default withToggle;
