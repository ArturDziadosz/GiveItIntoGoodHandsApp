import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CtaSignIn extends Component {
  render() {
    return (
      <Link to={"/rejestracja"}>
        <div className={"signIn"}>
          Załóż konto
        </div>
      </Link>
    )
  }
}

export {CtaSignIn};