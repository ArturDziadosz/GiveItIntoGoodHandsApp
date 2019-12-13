import React, {Component} from 'react';

import './cta.scss';

class CtaOrganize extends Component {
  render() {
    return (
      <div className={"give"} style={{padding: "13px 51px", marginLeft: "44px"}}>
        ZORGANIZUJ<br />ZBIÓRKĘ
      </div>
    )
  }
}

export {CtaOrganize};