import React, {Component} from 'react';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';

import {Home} from './Home';

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <>
            <Route exact path={'/'} component={Home} />
          </>
        </HashRouter>
      </>
    )
  }
}

export default App;
