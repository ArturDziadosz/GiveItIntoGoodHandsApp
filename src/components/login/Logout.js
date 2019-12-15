import React, {Component} from "react";
import {LogInBar} from "../bars/LogInBar";
import {NavBar} from "../bars/NavBar";
import {CtaMainPage} from "../CTA/CtaMainPage";

import './Login.scss';

class Logout extends Component {
  render() {
    return (
      <>
        <section className="container">
          <div className="row rowNav">
            <LogInBar/>
            <NavBar/>
          </div>
          <div className="logInBox">
            <h1 className="title">Wylogowanie nastąpiło pomyślnie!</h1>
            <div className="decoration"/>
            <CtaMainPage />
          </div>
        </section>
      </>
    );
  }
}

export {Logout};