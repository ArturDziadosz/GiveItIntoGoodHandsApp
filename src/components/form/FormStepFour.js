import React, {Component} from 'react';
import {FormStepCounter} from "./FormStepCounter";
import {CtaFormStepForward} from "../CTA/CtaFormStepForward";
import {CtaFormStepBackward} from "../CTA/CtaFormStepBackward";
import './FormStep.scss';

class FormStepFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep,
      stepFourStreet: "",
      streetError: "",
      stepFourCity: "",
      cityError: "",
      stepFourZipCode: "",
      zipCodeError: "",
      stepFourPhone: "",
      phoneError: "",
      stepFourDate: "",
      stepFourHour: "",
      stepFourMessage: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  changeCurrentStep = (newCurrentStep) => {
    const {stepFourStreet} = this.state;
    let error = false;

    this.setState({
      streetError: "",
    });

    if (stepFourStreet.length < 2) {
      this.setState( {
      streetError: "Podana nazwa ulicy jest za krótka!"
      });
      error = true;
    }

    if (error) {
      return false;
    }

    console.log("OK");

    this.setState({
      currentStep: newCurrentStep
    }, () => {
      const stepFour = [this.state.stepFourStreet, this.state.stepFourCity, this.state.stepFourZipCode, this.state.stepFourPhone, this.state.stepFourDate, this.state.stepFourHour, this.state.stepFourMessage];
      this.props.handleParentCurrentStep(this.state.currentStep, stepFour);
    });
  };

  render() {
    const {stepFourStreet, streetError, stepFourCity, stepFourZipCode, stepFourPhone, stepFourDate, stepFourHour, stepFourMessage} = this.state;

    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm">
            <FormStepCounter currentStep={this.state.currentStep}/>
            <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
            <div className="formContainer">
              <div className="formBox">
                <p>Adres odbioru:</p>
                <label className={"stepFourLabel"}>
                  <span>Ulica</span>
                  <input type={"text"} name={"stepFourStreet"} value={stepFourStreet} onChange={this.handleChange} style={streetError ? {border: ".75px solid red"} : null}/>
                  {streetError ? <p>{streetError}</p> : null}
                </label>
                <label className={"stepFourLabel"}>
                  <span>Miasto</span>
                  <input type={"text"} name={"stepFourCity"} value={stepFourCity} onChange={this.handleChange}/>
                </label>
                <label className={"stepFourLabel"}>
                  <span>Kod<br/>pocztowy</span>
                  <input type={"text"} name={"stepFourZipCode"} value={stepFourZipCode} onChange={this.handleChange}/>
                </label>
                <label className={"stepFourLabel"}>
                  <span>Numer<br/>telefonu</span>
                  <input type={"number"} name={"stepFourPhone"} value={stepFourPhone} onChange={this.handleChange}/>
                </label>
              </div>
              <div className="formBox">
                <p>Termin odbioru:</p>
                <label className={"stepFourLabel"}>
                  <span>Data</span>
                  <input type={"text"} name={"stepFourDate"} value={stepFourDate} onChange={this.handleChange}/>
                </label>
                <label className={"stepFourLabel"}>
                  <span>Godzina</span>
                  <input type={"text"} name={"stepFourHour"} value={stepFourHour} onChange={this.handleChange}/>
                </label>
                <label className={"stepFourLabel"}>
                  <span>Uwagi<br/>dla kuriera</span>
                  <textarea name={"stepFourMessage"} value={stepFourMessage} onChange={this.handleChange}/>
                </label>
              </div>
            </div>
            <div className="btns">
              <CtaFormStepBackward currentStep={this.state.currentStep}
                                   handleParentCurrentStep={this.changeCurrentStep}/>
              {(!stepFourStreet) || (!stepFourCity) || (!stepFourZipCode) || (!stepFourPhone) || (!stepFourDate) || (!stepFourHour) ?
                <div className={"forward"}>Wpisz adres oraz termin odbioru!</div> :
                <CtaFormStepForward currentStep={this.state.currentStep}
                                    handleParentCurrentStep={this.changeCurrentStep}/>}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export {FormStepFour};