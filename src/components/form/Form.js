import React, {Component} from 'react';
import {LogInBar} from "../bars/LogInBar";
import {NavBarAlt} from "../bars/NavBarAlt";
import {FormHeader} from "./FormHeader";
import {FormStepOne} from "./FormStepOne";
import {HomeContact} from "../home/HomeContact";

import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: true,
      currentStep: 1
    }
  }

  componentDidMount() {
    this.distanceToTop();
  }

  distanceToTop = () => {
    window.addEventListener("scroll", ev => {
      if (window.scrollY >= 700) {
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
      <>
        <header className={"headerForm"}>
          <section className="container">
            <div className="heroBanner"/>
            <div className="heroBox">
              <div className={this.state.topPosition ? "row rowNav" : "row rowNav rowZIdx"}>
                <div className={this.state.topPosition ? "fixedContainer" : "fixedContainerSmall"}>
                  <LogInBar/>
                  <NavBarAlt topPosition={this.state.topPosition}/>
                </div>
              </div>
              <div className={"row rowBanner"}>
                <h1>Oddaj rzeczy, których już nie chcesz<br/> POTRZEBUJĄCYM</h1>
                <div className="decoration"/>
                <h2>Wystarczą 4 proste kroki:</h2>
                <div className="fourStepsForm">
                  <div className="step">
                    <p>1</p>
                    <p>Wybierz rzeczy</p>
                  </div>
                  <div className="step">
                    <p>2</p>
                    <p>Spakuj je w worki</p>
                  </div>
                  <div className="step">
                    <p>3</p>
                    <p>Wybierz fundację</p>
                  </div>
                  <div className="step">
                    <p>4</p>
                    <p>Zamów kuriera</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <FormHeader currentStep={this.state.currentStep}/>
        <FormStepOne currentStep={this.state.currentStep}/>
        {/*<FormStepTwo/>*/}
        {/*<FormStepTree />*/}
        {/*<FormStepFour />*/}
        {/*<FormSumUp />*/}
        {/*<FormThanks />*/}
        <HomeContact/>
      </>
    );
  }
}

export {Form};