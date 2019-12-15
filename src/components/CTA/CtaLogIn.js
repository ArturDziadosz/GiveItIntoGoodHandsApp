import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CtaLogIn extends Component {
  render() {
    return (
      <Link to={"/logowanie"}>
        <div className={"logIn"}>
          Zaloguj
        </div>
      </Link>
    )
  }
}

export {CtaLogIn};