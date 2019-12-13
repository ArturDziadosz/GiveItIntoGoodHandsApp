import React, {Component} from "react";

import './LogInBar.scss';

class LogInBar extends Component {
  render() {
    return (
      <div className={"logInBar"}>
        <div className="logIn">Zaloguj</div>
        <div className="signIn">Załóż konto</div>
      </div>
    );
  }
}

export {LogInBar};