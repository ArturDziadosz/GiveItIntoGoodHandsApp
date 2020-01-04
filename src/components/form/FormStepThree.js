import React, {Component} from 'react';
import {FormStepCounter} from "./FormStepCounter";
import {CtaFormStepForward} from "../CTA/CtaFormStepForward";
import {CtaFormStepBackward} from "../CTA/CtaFormStepBackward";
import './FormStep.scss';

class FormStepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep,
      stepThreeLocalization: "",
      stepThreeHelpGroups: []
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
      this.props.handleParentCurrentStep(this.state.currentStep, this.state.stepThree);
    });
  };

  render() {
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm">
            <FormStepCounter currentStep={this.state.currentStep}/>
            <h3>Lokalizacja:</h3>
            <label className={"stepThreeLabel"}>
              <select name={"stepThreeLocalization"} onChange={this.handleChange}>
                <option selected={true} value={"— wybierz —"} disabled>— wybierz —</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
              </select>
            </label>
            <label className={"stepThreeLabel"}>
              <span>Komu chcesz pomóc?</span>
              <input type={"checkbox"} name={"stepThreeHelpGroups"} value={"dzieciom"} onChange={this.handleChange}/>
            </label>
            <div className="btns">
              <CtaFormStepBackward currentStep={this.state.currentStep}
                                   handleParentCurrentStep={this.changeCurrentStep}/>
              {(this.state.stepTwo === "— wybierz —") || (!this.state.stepTwo) ?
                <div className={"forward"}>Wybierz jedną z opcji!</div> :
                <CtaFormStepForward currentStep={this.state.currentStep}
                                    handleParentCurrentStep={this.changeCurrentStep}/>}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export {FormStepThree};