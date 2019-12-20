import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './cta.scss';

class CtaOrganize extends Component {
  render() {
    return (
      <Link to={"/oddaj-rzeczy"}>
        <div className={"give"} style={{padding: "13px 51px", marginLeft: "44px"}}>
          ZORGANIZUJ<br/>ZBIÓRKĘ
        </div>
      </Link>
    )
  }
}

export {CtaOrganize};