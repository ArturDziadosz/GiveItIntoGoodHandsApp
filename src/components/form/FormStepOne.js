import React, {Component} from 'react';
import {FormStepCounter} from "./FormStepCounter";
import {CtaFormStepForward} from "../CTA/CtaFormStepForward";

import './FormStep.scss';

class FormStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep,
      stepOne: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  changeCurrentStep = (newCurrentStep) => {
    this.setState({
      currentStep: newCurrentStep
    }, () => {
      this.props.handleParentCurrentStep(this.state.currentStep, this.state.stepOne);
    });
  };

  render() {
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm">
            <FormStepCounter currentStep={this.state.currentStep}/>
            <h3>Zaznacz co chcesz oddać:</h3>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"ubrania, które nadają się do ponownego użycia"} onChange={this.handleChange}/>
              <span className={"checkmark"} />
              ubrania, które nadają się do ponownego użycia
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"ubrania, do wyrzucenia"} onChange={this.handleChange}/>
              <span className={"checkmark"} />
              ubrania, do wyrzucenia
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"zabawki"} onChange={this.handleChange}/>
              <span className={"checkmark"} />
              zabawki
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"książki"} onChange={this.handleChange}/>
              <span className={"checkmark"} />
              książki
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"Inne"} onChange={this.handleChange}/>
              <span className={"checkmark"} />
              Inne
            </label>
            {this.state.stepOne ? <CtaFormStepForward handleParentCurrentStep={this.changeCurrentStep} currentStep={this.state.currentStep} /> : <div className={"forward"}>Wybierz jedną z opcji!</div>}
          </div>
        </section>
      </div>
    );
  }
}

export {FormStepOne};