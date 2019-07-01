import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../../store';
import { ThemeContext, themes } from '../../themes';
import Home from '../Home';
import ReactJS from '../ReactJS';
import Redux from '../Redux';

const displayName = 'App';

const propTypes = {
  theme: PropTypes.string.isRequired
};

export default function App({ theme }) {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themes[theme]}>
        <BrowserRouter>
          <Switch>
            <Route path="/reactjs" component={ReactJS} />
            <Route path="/redux" exact component={Redux} />
            <Route path="/:id" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
