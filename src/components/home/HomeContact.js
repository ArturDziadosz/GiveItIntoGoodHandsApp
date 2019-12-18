import React, {Component} from "react";

import './HomeContact.scss';

class HomeContact extends Component {
  render() {
    return (
      <section className={"contact"} id={"contact"}>
        <div className="container">
          <div className="row rowContact">
            <form>
              <h2>Skontaktuj się z nami</h2>
              <div className="decoration" />
              <div className="inputs">
                <div className="input name">
                  <label>Wpisz swoje imię<br/>
                    <input placeholder={"Artur"} required/>
                  </label>
                </div>
                <div className="input email">
                  <label>Wpisz swój email<br/>
                    <input placeholder={"abc@xyz.pl"} required/>
                  </label>
                </div>
              </div>
              <div className="text">
                <label>Wpisz swoją wiadomość
                  <textarea required placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
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