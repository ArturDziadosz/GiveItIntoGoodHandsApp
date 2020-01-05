import React, {Component} from 'react';
import {LogInBar} from "../bars/LogInBar";
import {NavBarAlt} from "../bars/NavBarAlt";
import {FormHeader} from "./FormHeader";
import {FormStepOne} from "./FormStepOne";
import {FormStepTwo} from "./FormStepTwo";
import {FormStepThree} from "./FormStepThree";
import {FormStepFour} from "./FormStepFour";
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

  changeCurrentStep = (newCurrentStep, chosenStep) => {
    this.setState({
      currentStep: newCurrentStep,
    }, () => {
      switch (this.state.currentStep) {
        case 2:
          this.setState({
            chosenStepOne: chosenStep
          });
          break;
        case 3:
          this.setState({
            chosenStepTwo: chosenStep
          });
          break;
        case 4:
          this.setState({
            chosenStepThree: chosenStep
          });
          break;
        case 5:
          this.setState({
            chosenStepFour: chosenStep
          });
          break;
        default:
          return false;
      }
    })
  };

  render() {
    const {topPosition, currentStep} = this.state;
    let step = null;
    switch (currentStep) {
      case 1:
        step = <FormStepOne currentStep={currentStep} handleParentCurrentStep={this.changeCurrentStep}/>;
        break;
      case 2:
        step = <FormStepTwo currentStep={currentStep} handleParentCurrentStep={this.changeCurrentStep}/>;
        break;
      case 3:
        step = <FormStepThree currentStep={currentStep} handleParentCurrentStep={this.changeCurrentStep}/>;
        break;
      case 4:
        step = <FormStepFour currentStep={currentStep} handleParentCurrentStep={this.changeCurrentStep}/>;
        break;
      case 5:
        step = <div>Podsumowanie</div>;
        break;
      case 6:
        step = <div>Podziękowanie</div>;
        break;
      default:
        step = <p>Oopsss! Something goes wrong :(</p>
    }
    return (
      <>
        <header className={"headerForm"}>
          <section className="container">
            <div className="heroBanner"/>
            <div className="heroBox">
              <div className={topPosition ? "row rowNav" : "row rowNav rowZIdx"}>
                <div className={topPosition ? "fixedContainer" : "fixedContainerSmall"}>
                  <LogInBar/>
                  <NavBarAlt topPosition={topPosition}/>
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
        <FormHeader currentStep={currentStep}/>
        {step}
        <HomeContact/>
      </>
    );
  }
}

export {Form};