import React, {Component} from 'react';
import {NavBar} from "../bars/NavBar";
import {LogInBar} from "../bars/LogInBar";
import {CtaGive} from "../CTA/CtaGive";
import {CtaOrganize} from "../CTA/CtaOrganize";

import './HomeHeader.scss';

class HomeHeader extends Component {
  render() {
    return (
      <header>
        <section className={"container"}>
          <div className="heroBanner"/>
          <div className="heroBox">
            <div className={"row rowNav"}>
              <LogInBar/>
              <NavBar/>
            </div>
            <div className={"row rowBanner"}>
              <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
              <div className="decoration"/>
              <div className="cta">
                <CtaGive/>
                <CtaOrganize/>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export {HomeHeader};
