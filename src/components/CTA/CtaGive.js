import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './cta.scss';

class CtaGive extends Component {
  render() {
    return (
      <Link to={"/logowanie"}>
        <div className={"give"}>
          ODDAJ<br/>RZECZY
        </div>
      </Link>
    )
  }
}

export {CtaGive};