import React, {Component} from "react";
import {LogInBar} from "../bars/LogInBar";
import {NavBarAlt} from "../bars/NavBarAlt";
import {CtaLogIn} from "../CTA/CtaLogIn";

import './Login.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      password2: "",
      passwordError2: ""
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
    const {email, password, password2} = this.state;
    let error = false;

    this.setState({
      emailError: "",
      passwordError: "",
      passwordError2: ""
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

    if (password2.length < 6 || password !== password2) {
      this.setState({
        passwordError2: "Podane hasło jest nieprawidłowe!"
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
    const {email, emailError, password, passwordError, password2, passwordError2} = this.state;
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
            <h1 className="title">Załóż konto</h1>
            <div className="decoration"/>
            <form onSubmit={this.handleFormSubmit}>
              <div className="formBox">
                <label>
                  Email<br/>
                  <input type={"text"} name={"email"} value={email} onChange={this.handleChange} style={emailError ? {borderBottom: "1px solid red"} : null}/>
                  {emailError ? <p>{emailError}</p> : null}
                </label>
                <label>
                  Hasło<br/>
                  <input type={"password"} name={"password"} value={password} onChange={this.handleChange}
                         style={passwordError ? {borderBottom: "1px solid red"} : null}/>
                  {passwordError ? <p>{passwordError}</p> : null}
                </label>
                <label>
                  Powtórz hasło<br/>
                  <input type={"password"} name={"password2"} value={password2} onChange={this.handleChange}
                         style={passwordError2 ? {borderBottom: "1px solid red"} : null}/>
                  {passwordError2 ? <p>{passwordError2}</p> : null}
                </label>
              </div>
              <div className="formSubmit">
                <CtaLogIn text={"Zaloguj się"}/>
                <button className={"logInBtn"}>Załóż konto</button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export {Register};