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
      stepFourMessage: "",
      error: true
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleChangeStreet = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: true
    }, () => {
      const {stepFourStreet} = this.state;
      let error = false;

      this.setState({
        streetError: ""
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

      this.setState({
        error: false
      })
    });
  };

  handleChangeCity = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: true
    }, () => {
      const {stepFourCity} = this.state;
      let error = false;

      this.setState({
        cityError: ""
      });

      if (stepFourCity.length < 2) {
        this.setState( {
          cityError: "Podana nazwa miasta jest za krótka!"
        });
        error = true;
      }

      if (error) {
        return false;
      }

      this.setState({
        error: false
      })
    });
  };

  handleChangeZipCode = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: true
    }, () => {
      const {stepFourZipCode} = this.state;
      let error = false;

      this.setState({
        zipCodeError: ""
      });

      if (!this.validateZipCode(stepFourZipCode)) {
        this.setState( {
          zipCodeError: "Kod pocztowy powinien być w formacie __-___"
        });
        error = true;
      }

      if (error) {
        return false;
      }

      this.setState({
        error: false
      })
    });
  };

  handleChangePhone = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: true
    }, () => {
      const {stepFourPhone} = this.state;
      let error = false;

      this.setState({
        phoneError: ""
      });

      if (!this.validatePhoneNumber(stepFourPhone)) {
        this.setState( {
          phoneError: "Numer telefonu powinien składać się z 9 cyfr!"
        });
        error = true;
      }

      if (error) {
        return false;
      }

      this.setState({
        error: false
      })
    });
  };

  validateZipCode = (zipCode) => {
    const re = /\b\d{2}-\d{3}\b/;
    return re.test(zipCode);
  };

  validatePhoneNumber = (phoneNumber) => {
    const re = /\b\d{9}\b/;
    return re.test(phoneNumber);
  };

  changeCurrentStep = (newCurrentStep) =>
    this.setState({
      currentStep: newCurrentStep
    }, () => {
      const stepFour = [this.state.stepFourStreet, this.state.stepFourCity, this.state.stepFourZipCode, this.state.stepFourPhone, this.state.stepFourDate, this.state.stepFourHour, this.state.stepFourMessage];
      this.props.handleParentCurrentStep(this.state.currentStep, stepFour);
    });

  render() {
    const {stepFourStreet, streetError, stepFourCity, cityError, stepFourZipCode, zipCodeError, stepFourPhone, phoneError, stepFourDate, stepFourHour, stepFourMessage} = this.state;
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
                  <input type={"text"} name={"stepFourStreet"} value={stepFourStreet} onChange={this.handleChangeStreet} style={streetError ? {border: ".75px solid red"} : null}/>
                </label>
                {streetError ? <p className={"error"}>{streetError}</p> : null}
                <label className={"stepFourLabel"}>
                  <span>Miasto</span>
                  <input type={"text"} name={"stepFourCity"} value={stepFourCity} onChange={this.handleChangeCity} style={cityError ? {border: ".75px solid red"} : null}/>

                </label>
                {cityError ? <p className={"error"}>{cityError}</p> : null}
                <label className={"stepFourLabel"}>
                  <span>Kod<br/>pocztowy</span>
                  <input type={"text"} name={"stepFourZipCode"} value={stepFourZipCode} placeholder={"__-___"} onChange={this.handleChangeZipCode} style={zipCodeError ? {border: ".75px solid red"} : null}/>

                </label>
                {zipCodeError ? <p className={"error"}>{zipCodeError}</p> : null}
                <label className={"stepFourLabel"}>
                  <span>Numer<br/>telefonu</span>
                  <input type={"number"} name={"stepFourPhone"} value={stepFourPhone} onChange={this.handleChangePhone} style={phoneError ? {border: ".75px solid red"} : null}/>

                </label>
                {phoneError ? <p className={"error"}>{phoneError}</p> : null}
              </div>
              <div className="formBox">
                <p>Termin odbioru:</p>
                <label className={"stepFourLabel"}>
                  <span>Data</span>
                  <input type={"date"} name={"stepFourDate"} value={stepFourDate} onChange={this.handleChange}/>
                </label>
                <label className={"stepFourLabel"}>
                  <span>Godzina</span>
                  <input type={"time"} name={"stepFourHour"} value={stepFourHour} onChange={this.handleChange}/>
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
              {(!stepFourStreet) || (!stepFourCity) || (!stepFourZipCode) || (!stepFourPhone) || (!stepFourDate) || (!stepFourHour) || (this.state.error) ?
                <div className={"forward"}>Wpisz poprawny adres oraz termin odbioru!</div> :
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