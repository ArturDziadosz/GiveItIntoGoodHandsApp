import React, {Component} from "react";
import {HashLink as Link} from 'react-router-hash-link';

import './NavBar.scss';

class NavBarAlt extends Component {
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
          <li><Link to={'/#start'} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})}>Start</Link></li>
          <li><Link to={"/#fourSteps"} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})}>O co chodzi?</Link></li>
          <li><Link to={"/#about"} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})}>O nas</Link></li>
          <li><Link to={"/#whoWeHelp"} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})}>Fundacja i organizacje</Link></li>
          <li><Link to={"/#contact"} scroll={el => el.scrollIntoView({behavior: "smooth", block: "center"})}>Kontakt</Link></li>
        </ul>
      </div>
    );
  }
}

export {NavBarAlt};