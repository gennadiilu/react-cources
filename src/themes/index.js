import React from 'react';
import base from './base';
import red from './red';

const ThemeContext = React.createContext();

const themes = { base, red };

export { ThemeContext, themes };
