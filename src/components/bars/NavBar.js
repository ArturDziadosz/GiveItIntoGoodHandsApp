import React, {Component} from "react";
import {Link} from 'react-scroll';

import './NavBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: this.props.topPosition
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topPosition !== this.props.topPosition) {
      this.setState({
        topPosition: this.props.topPosition
      })
    }
  }

  render() {
    return (
      <div className={this.state.topPosition ? "navBarTopPosition" : "navBarTopPosition navBar"}>
        <ul>
          <li><Link to={"header"} spy={true} smooth={true} duration={1000} offset={-135}>Start</Link></li>
          <li><Link to={"fourSteps"} spy={true} smooth={true} duration={1000} offset={-160}>O co chodzi?</Link></li>
          <li><Link to={"about"} spy={true} smooth={true} duration={1000} offset={-120}>O nas</Link></li>
          <li><Link to={"whoWeHelp"} spy={true} smooth={true} duration={1000} offset={-170}>Fundacja i
            organizacje</Link></li>
          <li><Link to={"contact"} spy={true} smooth={true} duration={1000} offset={-100}>Kontakt</Link></li>
        </ul>
      </div>
    );
  }
}

export {NavBar};