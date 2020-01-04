import React, {Component} from 'react';
import {FormStepCounter} from "./FormStepCounter";
import {CtaFormStepForward} from "../CTA/CtaFormStepForward";
import {CtaFormStepBackward} from "../CTA/CtaFormStepBackward";
import './FormStep.scss';

class FormStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep,
      stepTwo: ""
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
      this.props.handleParentCurrentStep(this.state.currentStep, this.state.stepTwo);
    });
  };

  render() {
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm">
            <FormStepCounter currentStep={this.state.currentStep}/>
            <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <label className={"stepTwoLabel"}>
              <span>Liczba 60l worków:</span>
              <select name={"stepTwo"} onChange={this.handleChange}>
                <option selected={true} value={"— wybierz —"} disabled>— wybierz —</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <div className="btns">
              <CtaFormStepBackward currentStep={this.state.currentStep} handleParentCurrentStep={this.changeCurrentStep}/>
              {(this.state.stepTwo === "— wybierz —") || (!this.state.stepTwo) ? <div className={"forward"}>Wybierz jedną z opcji!</div> : <CtaFormStepForward currentStep={this.state.currentStep} handleParentCurrentStep={this.changeCurrentStep}/>}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export {FormStepTwo};