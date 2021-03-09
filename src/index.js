import * as React from 'react';
import * as ReactDom from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './routers/Router';

import './style/core.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router />
      </MuiThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
