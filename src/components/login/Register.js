import React, {Component} from "react";
import {LogInBar} from "../bars/LogInBar";
import {NavBar} from "../bars/NavBar";
import {CtaLogIn} from "../CTA/CtaLogIn";

import './Login.scss';

class Register extends Component {
  render() {
    return (
      <>
        <section className="container">
          <div className="row rowNav">
            <LogInBar/>
            <NavBar/>
          </div>
          <div className="logInBox">
            <h1 className="title">Załóż konto</h1>
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
                <label>
                  Powtórz hasło<br/>
                  <input/>
                </label>
              </div>
              <div className="formSubmit">
                <CtaLogIn text={"Zaloguj się"}/>
                <div className={"logInBtn"}>Załóż konto</div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export {Register};