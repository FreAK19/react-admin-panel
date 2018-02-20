import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './routes/home';
import './App.less';
import store from './store';

export default class App extends Component {
  state = {};

  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
