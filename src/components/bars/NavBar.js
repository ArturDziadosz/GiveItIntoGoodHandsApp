import React, {Component} from "react";

import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className={"navBar"}>
        <ul>
          <li>Start</li>
          <li>O co chodzi?</li>
          <li>O nas</li>
          <li>Fundacja i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>
    );
  }
}

export {NavBar};