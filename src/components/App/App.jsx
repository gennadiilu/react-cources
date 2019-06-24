import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext, themes } from '../../themes';
import Home from '../Home';
import ReactJS from '../ReactJS';

const displayName = 'App';

const propTypes = {
  theme: PropTypes.string.isRequired
};

export default function App({ theme }) {
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <BrowserRouter>
        <Switch>
          <Route path="/reactjs" component={ReactJS} />
          <Route path="/:id" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
