import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import { ThemeContext, themes } from '../../themes';
import Button from '../Button';
import ToggleButton from '../ToggleButton';

const displayName = 'App';

const propTypes = {
  theme: PropTypes.string.isRequired
};

export default function App({ theme }) {
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <Header name="React" />
      <Button text="Click Me!" />
      <ToggleButton text="Toggle Me!" />
    </ThemeContext.Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
