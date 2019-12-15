import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CtaMainPage extends Component {
  render() {
    return (
      <Link to={"/"}>
        <div className={"mainPage"}>
          {this.props.text ? "" : "Strona główna"}
        </div>
      </Link>
    )
  }
}

export {CtaMainPage};