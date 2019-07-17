# react-cources

Training react project.

# Setup

## Install

- Node JS
- VS Code
- Java runtime

## VS Code extensions

- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- jtlowe.vscode-icon-theme
- VisualStudioExptTeam.vscodeintellicode

## VS Code settings

```javascript
{
  "editor.minimap.enabled": true,
  "workbench.sideBar.location": "right",
  "files.autoSave": "afterDelay",
  "workbench.iconTheme": "vscode-icon-theme",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true,
  "editor.renderWhitespace": "all",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "prettier.eslintIntegration": true,
  "typescript.validate.enable": false,
  "typescript.format.enable": false,
  "javascript.validate.enable": false,
  "javascript.format.enable": false,
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "editor.rulers": [120],
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "terminal.integrated.rightClickBehavior": "default"
}
```

# Training program

## Frontend Basics

### HTML - https://www.w3schools.com/html/default.asp

- HTML5 Tutorial
- HTML Forms
- HTML5

### CSS - https://www.w3schools.com/css/default.asp

- CSS Tutorial
- CSS Advanced
- CSS Responsive
- CSS Grid

### JavaScript - https://www.w3schools.com/js/default.asp

- JS Tutorial
- JS Forms
- JS Objects
- JS Functions
- JS HTML DOM
- JS BROWSER DOM
- JS AJAX
- JS JSON

### ECMA Script 6 - https://github.com/lukehoban/es6features#readme

### TC39 Proposals

- https://babeljs.io/blog/2018/08/27/7.0.0#tc39-proposals-https-githubcom-tc39-proposals-support
- https://babeljs.io/blog/2018/12/03/7.2.0#highlights

## React

### React project setup

- Webpack: development, production settings
- Webpack Dev Server
- Scripts, npm-run-all
- Babel
- Prettier, ESLint
- VS Code: extensions, user settings
- Useful NPM packages
  - npm-check-updates: https://www.npmjs.com/package/npm-check-updates
- ECMAScript6 sugar

#### References

- https://webpack.js.org
- https://babeljs.io
- http://es6-features.org/#Constants

### React JS

- React project structure
- Functional components
- JSX
- PropTypes. Primitive types, functions, shapes, components
- Children
- Fragments
- Context
- HOCs
- State
- Lifecycle
- Events
- Best practices

#### References

- https://reactjs.org/docs/getting-started.html
- https://reactpatterns.com
- https://github.com/MicheleBertoli/react-design-patterns-and-best-practices
- https://github.com/vasanthk/react-bits/tree/master/anti-patterns
- http://bradfrost.com/blog/post/atomic-web-design

### React Routing

- BrowserRouter, withRouter
- Route, Switch, exact, url parameters (/:param1/:param2/:param3)
- Link, NavLink, Redirect
- match, location, history

#### References

- https://reacttraining.com/react-router/web/guides/philosophy

### Recompose

- Recompose

#### References

- https://github.com/acdlite/recompose/blob/master/docs/API.md

### Redux. Immutable JS. Reselect

- FSA actions, store, reducers
- Store splitting. Flatten store
- Types of reducers
- Middleware
- JSON server
- Asynchronous actions
- Axios
- redux-thunk
- Reselect

#### References

- https://redux.js.org
- https://facebook.github.io/immutable-js
- https://github.com/reduxjs/redux-thunk
- https://github.com/typicode/json-server
- https://github.com/axios/axios
- https://github.com/reduxjs/reselect

### Styled Components. Responsive Grid Layout

- Styling basic HTML elements
- CSS properties using functions: color: (props) => … and attributes: .attrs({…})
- Styling any components: styled(Component), extend, as: <StyledComponent as="button" ...
- Custom fonts. Icons from fonts files
- Images, sprites
- Media queries
- Keyframe animations
- Responsive Grid Layout: react-flexbox-grid

#### References

- https://www.styled-components.com
- http://roylee0704.github.io/react-flexbox-grid

### Unit tests with Jest

- Setup: Jest, Babel, Enzyme
- Test structure: describe/it
- Given/When/Then
- Matchers: expect
- Mocking modules
- Writing tests: presentational components, containers, actions/async actions, reducers, selectors, store

#### References

- https://jestjs.io
- http://airbnb.io/enzyme

### Automation with WebdriverIO

- Setup WebdriverIO
- Component Objects
- Spec files. Scenarios. Given/When/Then

#### References

- http://webdriver.io

## Home Work

Develop a simple shopping aplication using the above stack of libraries while learning:
![Catalog](docs/Page1.png)
![Basket](docs/Page2.png)
![Order](docs/Page3.png)
![ThankYou](docs/Page4.png)
