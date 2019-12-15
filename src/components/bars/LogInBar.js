import React, {Component} from "react";
import {CtaLogIn} from "../CTA/CtaLogIn";
import {CtaSignIn} from "../CTA/CtaSignIn";

import './LogInBar.scss';

class LogInBar extends Component {
  render() {
    return (
      <div className={"logInBar"}>
        <CtaLogIn />
        <CtaSignIn />
      </div>
    );
  }
}

export {LogInBar};