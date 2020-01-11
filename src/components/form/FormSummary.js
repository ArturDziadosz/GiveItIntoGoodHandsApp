import React, {Component} from 'react';
import {CtaFormStepForward} from "../CTA/CtaFormStepForward";
import {CtaFormStepBackward} from "../CTA/CtaFormStepBackward";
import './FormStep.scss';

class FormSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep,
      chosenStepOne: this.props.chosenStepOne,
      chosenStepTwo: this.props.chosenStepTwo
    }
  }

  changeCurrentStep = (newCurrentStep) => {
    this.setState({
      currentStep: newCurrentStep
    });
  };

  render() {
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm rowSummary">
            <h3>Podsumowanie Twojej darowizny</h3>
            <div className="formContainer">
              <div className="formBox summaryBox">
                <p>Oddajesz:</p>
                <div className={"stepFourLabel summaryBags"}>
                  <div className={"summaryFirstImg"}/>
                  <span>{this.state.chosenStepTwo} worki, {this.state.chosenStepOne}, {this.state.chosenStepOne}</span>
                </div>
                <div className={"stepFourLabel summaryBags"}>
                  <div className={"summarySecondImg"}/>
                  <span>dla lokalizacji: {this.state.chosenStepOne}, {this.state.chosenStepOne}</span>
                </div>
              </div>
            </div>
            <div className="formContainer">
              <div className="formBox">
                <p>Adres odbioru:</p>
                <div className={"stepFourLabel"}>
                  <span>Ulica</span>
                  <span>{this.state.formSummary}</span>
                </div>
                <div className={"stepFourLabel"}>
                  <span>Miasto</span>

                </div>
                <div className={"stepFourLabel"}>
                  <span>Kod<br/>pocztowy</span>

                </div>
                <div className={"stepFourLabel"}>
                  <span>Numer<br/>telefonu</span>

                </div>
              </div>
              <div className="formBox">
                <p>Termin odbioru:</p>
                <div className={"stepFourLabel"}>
                  <span>Data</span>
                </div>
                <div className={"stepFourLabel"}>
                  <span>Godzina</span>
                </div>
                <div className={"stepFourLabel"}>
                  <span>Uwagi<br/>dla kuriera</span>
                </div>
              </div>
            </div>
            <div className="btns">
              <CtaFormStepBackward currentStep={this.state.currentStep} handleParentCurrentStep={this.changeCurrentStep}/>
              <CtaFormStepForward currentStep={this.state.currentStep} handleParentCurrentStep={this.changeCurrentStep}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export {FormSummary};