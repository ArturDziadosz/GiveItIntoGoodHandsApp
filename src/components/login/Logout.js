import React, {Component} from "react";
import {LogInBar} from "../bars/LogInBar";
import {NavBarAlt} from "../bars/NavBarAlt";
import {CtaMainPage} from "../CTA/CtaMainPage";

import './Login.scss';

class Logout extends Component {
  render() {
    return (
      <>
        <section className="container containerAlt">
          <div className="row rowNavAlt">
            <div className="fixedContainer">
              <LogInBar/>
              <NavBarAlt/>
            </div>
          </div>
          <div className="logInBox">
            <h1 className="title">Wylogowanie nastąpiło pomyślnie!</h1>
            <div className="decoration"/>
            <CtaMainPage/>
          </div>
        </section>
      </>
    );
  }
}

export {Logout};