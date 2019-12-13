import React, {Component} from "react";
import {Link} from 'react-scroll';

import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className={"navBar"}>
        <ul>
          <li><Link to={"header"} spy={true} smooth={true} duration={1000} offset={-135}>Start</Link></li>
          <li><Link to={"fourSteps"} spy={true} smooth={true} duration={1000} offset={-200}>O co chodzi?</Link></li>
          <li><Link to={"about"} spy={true} smooth={true} duration={1000} offset={-180}>O nas</Link></li>
          <li><Link to={"whoWeHelp"} spy={true} smooth={true} duration={1000} offset={-195}>Fundacja i organizacje</Link></li>
          <li><Link to={"contact"} spy={true} smooth={true} duration={1000} offset={-125}>Kontakt</Link></li>
        </ul>
      </div>
    );
  }
}

export {NavBar};