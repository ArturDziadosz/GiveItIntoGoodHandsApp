import React, {Component} from "react";
import {Link} from 'react-router-dom';

import './NavBar.scss';

class NavBarAlt extends Component {
  render() {
    return (
      <div className={"navBarTopPosition"}>
        <ul>
          <li><Link to={'/'}>Start</Link></li>
          <li><Link to={"/"}>O co chodzi?</Link></li>
          <li><Link to={"/"}>O nas</Link></li>
          <li><Link to={"/"}>Fundacja i organizacje</Link></li>
          <li><Link to={"/"}>Kontakt</Link></li>
        </ul>
      </div>
    );
  }
}

export {NavBarAlt};