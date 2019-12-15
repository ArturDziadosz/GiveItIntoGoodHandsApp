import React, {Component} from 'react';
import {NavBar} from "../bars/NavBar";
import {LogInBar} from "../bars/LogInBar";
import {CtaGive} from "../CTA/CtaGive";
import {CtaOrganize} from "../CTA/CtaOrganize";

import './HomeHeader.scss';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: true
    }
  }

  componentDidMount() {
    this.distanceToTop();
  }

  distanceToTop = () => {
    window.addEventListener("scroll", ev => {
      if (window.scrollY >= 150) {
        this.setState({
          topPosition: false
        })
      } else {
        this.setState({
          topPosition: true
        })
      }
    })
  };

  render() {
    return (
      <header name={"header"}>
        <section className={"container"}>
          <div className="heroBanner"/>
          <div className="heroBox">
            <div className={"row rowNav"}>
              <div className={this.state.topPosition ? "fixedContainer" : "fixedContainerSmall"}>
                <LogInBar/>
                <NavBar topPosition={this.state.topPosition}/>
              </div>
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
