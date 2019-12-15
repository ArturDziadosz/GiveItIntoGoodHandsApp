import React, {Component} from "react";
import {LogInBar} from "../bars/LogInBar";
import {NavBar} from "../bars/NavBar";
import {CtaSignIn} from "../CTA/CtaSignIn";

import './Login.scss';

class Login extends Component {
  render() {
    return (
      <>
        <section className="container">
          <div className="row rowNav">
            <LogInBar/>
            <NavBar/>
          </div>
          <div className="logInBox">
            <h1 className="title">Zaloguj się</h1>
            <div className="decoration" />
            <form>
              <div className="formBox">
                <label>
                  Email<br/>
                  <input/>
                </label>
                <label>
                  Hasło<br/>
                  <input/>
                </label>
              </div>
              <div className="formSubmit">
                <CtaSignIn />
                <div className={"logInBtn"}>Zaloguj się</div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export {Login};