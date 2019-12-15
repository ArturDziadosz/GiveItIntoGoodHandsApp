import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import {Home} from './Home';
import {Login} from "./login/Login";
import {Logout} from "./login/Logout";
import {Register} from "./login/Register";

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <>
            <Route exact path={'/'} component={Home} />
            {/*<Route path={'/oddaj-rzeczy'} component={Form} />*/}
            <Route path={'/logowanie'} component={Login} />
            <Route path={'/rejestracja'} component={Register} />
            <Route path={'/wylogowano'} component={Logout} />
          </>
        </HashRouter>
      </>
    )
  }
}

export default App;
