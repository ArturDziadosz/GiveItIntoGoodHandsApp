import React, {Component} from "react";
import {LogInBar} from "../bars/LogInBar";
import {NavBarAlt} from "../bars/NavBarAlt";
import {CtaSignIn} from "../CTA/CtaSignIn";

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const {email, password} = this.state;
    let error = false;

    this.setState({
      emailError: "",
      passwordError: ""
    });

    if (!this.validateEmail(email)) {
      this.setState({
        emailError: "Podany email jest nieprawidłowy!"
      });
      error = true;
    }
    if (password.length < 6) {
      this.setState({
        passwordError: "Podane hasło jest za krótkie!"
      });
      error = true;
    }

    if (error) {
      return false;
    }
    //  FETCH
    console.log("OK");
  };

  render() {
    const {email, emailError, password, passwordError} = this.state;
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
            <form onSubmit={this.handleFormSubmit}>
              <div className="formBox">
                <label>
                  Email<br/>
                  <input type={"text"} name={"email"} value={email} onChange={this.handleChange}
                         style={emailError ? {borderBottom: "1px solid red"} : null}/>
                  {emailError ? <p>{emailError}</p> : null}
                </label>
                <label>
                  Hasło<br/>
                  <input type={"password"} name={"password"} value={password} onChange={this.handleChange}
                         style={passwordError ? {borderBottom: "1px solid red"} : null}/>
                  {passwordError ? <p>{passwordError}</p> : null}
                </label>
              </div>
              <div className="formSubmit">
                <CtaSignIn/>
                <button className={"logInBtn"}>Zaloguj się</button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export {Login};