import React, {Component} from "react";
import {LogInBar} from "../bars/LogInBar";
import {NavBarAlt} from "../bars/NavBarAlt";
import {CtaSignIn} from "../CTA/CtaSignIn";

import './Login.scss';

class Login extends Component {
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
            <h1 className="title">Zaloguj się</h1>
            <div className="decoration"/>
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
                <CtaSignIn/>
                <button className={"logInBtn"}><span>Zaloguj się</span></button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export {Login};