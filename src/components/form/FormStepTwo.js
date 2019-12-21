import React, {Component} from 'react';
import {FormStepCounter} from "./FormStepCounter";
import {CtaFormStepForward} from "../CTA/CtaFormStepForward";

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

  render() {
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm">
            <FormStepCounter currentStep={this.state.currentStep}/>
            <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <CtaFormStepForward currentStep={this.state.currentStep}/>
          </div>
        </section>
      </div>
    );
  }
}

export {FormStepTwo};