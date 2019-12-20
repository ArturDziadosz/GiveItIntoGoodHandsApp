import React, {Component} from 'react';
import {FormStepCounter} from "./FormStepCounter";
import {CtaFormStepForward} from "../CTA/CtaFormStepForward";

import './FormStep.scss';

class FormStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep
    }
  }

  render() {
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm">
            <FormStepCounter currentStep={this.state.currentStep}/>
            <h3>Zaznacz co chcesz oddać:</h3>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"secondHandClothes"} checked/>
              <span className={"checkmark"} />
              ubrania, które nadają się do ponownego użycia
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"thrownAwayClothes"}/>
              <span className={"checkmark"} />
              ubrania, do wyrzucenia
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"toys"}/>
              <span className={"checkmark"} />
              zabawki
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"books"}/>
              <span className={"checkmark"} />
              książki
            </label>
            <label className={"stepOneLabel"}>
              <input type={"radio"} name={"stepOne"} value={"others"}/>
              <span className={"checkmark"} />
              Inne
            </label>
            <CtaFormStepForward/>
          </div>
        </section>
      </div>
    );
  }
}

export {FormStepOne};