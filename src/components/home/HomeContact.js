import React, {Component} from "react";

import './HomeContact.scss';

class HomeContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      textarea: "",
      textareaError: ""
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
    const {name, email, textarea} = this.state;
    let error = false;

    this.setState({
      nameError: "",
      emailError: "",
      textareaError: ""
    });
    if (name.length === 0) {
      this.setState({
        nameError: "Podane imię jest nieprawidłowe!"
      });
      error = true;
    }
    if (!this.validateEmail(email)) {
      this.setState({
        emailError: "Podany email jest nieprawidłowy!"
      });
      error = true;
    }
    if (textarea.length < 120) {
      this.setState({
        textareaError: "Wiadomość musi mieć conajmniej 120 znaków!"
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
    const {name, nameError, email, emailError, textarea, textareaError} = this.state;
    return (
      <section className={"contact"} id={"contact"}>
        <div className="container">
          <div className="row rowContact">
            <form onSubmit={this.handleFormSubmit}>
              <h2>Skontaktuj się z nami</h2>
              <div className="decoration" />
              <div className="inputs">
                <div className="input name">
                  <label>Wpisz swoje imię<br/>
                    <input placeholder={"Artur"} type={"text"} name={"name"} value={name} onChange={this.handleChange}
                           style={nameError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}/>
                    {nameError ? <p>{nameError}</p> : null}
                  </label>
                </div>
                <div className="input email">
                  <label>Wpisz swój email<br/>
                    <input placeholder={"abc@xyz.pl"} type={"text"} name={"email"} value={email} onChange={this.handleChange}
                           style={emailError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null}/>
                    {emailError ? <p>{emailError}</p> : null}
                  </label>
                </div>
              </div>
              <div className="text">
                <label>Wpisz swoją wiadomość
                  <textarea name={"textarea"} value={textarea} onChange={this.handleChange}
                            style={textareaError ? {borderBottom: "1px solid rgba(255,0,0,.7)"} : null} placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                  {textareaError ? <p>{textareaError}</p> : null}
                </label>
              </div>
              <button>Wyślij</button>
            </form>
          </div>
          <footer className="row">
            <p>Copyright by Coders Lab</p>
            <div className="icons">
              <a href={"http://www.facebok.com"} target={"_blank"}/>
              <a href={"https://www.instagram.com/darturo_/"} target={"_blank"}/>
            </div>
          </footer>
        </div>

      </section>
    );
  }
}

export {HomeContact};