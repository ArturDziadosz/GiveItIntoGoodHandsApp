import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {Home} from './Home';
import {Login} from "./login/Login";
import {Logout} from "./login/Logout";
import {Register} from "./login/Register";
import {Error404} from "./login/Error404";

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              {/*<Route path={'/oddaj-rzeczy'} component={Form} />*/}
              <Route path={'/logowanie'} component={Login}/>
              <Route path={'/rejestracja'} component={Register}/>
              <Route path={'/wylogowano'} component={Logout}/>
              <Route component={Error404}/>
            </Switch>
          </>
        </HashRouter>
      </>
    )
  }
}

export default App;
