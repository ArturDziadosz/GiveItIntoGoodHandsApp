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
      stepThreeHelpGroups: [],
      stepThreeEntity: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleChangeCheckbox = e => {
    let value = e.target.value;
    if (this.state.stepThreeHelpGroups.includes(value)) {
      let newArray = this.state.stepThreeHelpGroups;
      newArray.splice(newArray.indexOf(value), 1);
      this.setState({
        stepThreeHelpGroups: newArray
      })
    } else {
      this.setState(prevState => ({
        stepThreeHelpGroups: [...prevState.stepThreeHelpGroups, value]
      }))
    }
  };

  changeCurrentStep = (newCurrentStep) =>
    this.setState({
      currentStep: newCurrentStep
    }, () => {
      const stepThree = [this.state.stepThreeLocalization, this.state.stepThreeHelpGroups, this.state.stepThreeEntity.trim()];
      this.props.handleParentCurrentStep(this.state.currentStep, stepThree);
    });

  render() {
    const {stepThreeLocalization, currentStep, stepThreeEntity, stepThreeHelpGroups} = this.state;
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm">
            <FormStepCounter currentStep={currentStep}/>
            <h3>Lokalizacja:</h3>
            <label className={"firstStepThreeLabel"}>
              <select name={"stepThreeLocalization"} onChange={this.handleChange}>
                <option selected={true} value={"— wybierz —"} disabled>— wybierz —</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
              </select>
            </label>
            <p className={"stepThreeText"}>Komu chcesz pomóc?</p>
            <div className="checkmarkBox">
              <label className={"stepThreeLabel"}>
                <input type={"checkbox"} name={"stepThreeHelpGroups"} value={"dzieciom"}
                       onChange={this.handleChangeCheckbox}/>
                <span className={"checkmark"}>dzieciom</span>
              </label>
              <label className={"stepThreeLabel"}>
                <input type={"checkbox"} name={"stepThreeHelpGroups"} value={"samotnym matkom"}
                       onChange={this.handleChangeCheckbox}/>
                <span className={"checkmark"}>samotnym matkom</span>
              </label>
              <label className={"stepThreeLabel"}>
                <input type={"checkbox"} name={"stepThreeHelpGroups"} value={"bezdomnym"}
                       onChange={this.handleChangeCheckbox}/>
                <span className={"checkmark"}>bezdomnym</span>
              </label>
              <label className={"stepThreeLabel"}>
                <input type={"checkbox"} name={"stepThreeHelpGroups"} value={"niepełnosprawnym"}
                       onChange={this.handleChangeCheckbox}/>
                <span className={"checkmark"}>niepełnosprawnym</span>
              </label>
              <label className={"stepThreeLabel"}>
                <input type={"checkbox"} name={"stepThreeHelpGroups"} value={"osobom starszym"}
                       onChange={this.handleChangeCheckbox}/>
                <span className={"checkmark"}>osobom starszym</span>
              </label>
            </div>
            <p className={"stepThreeText"}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
            <label className={"lastStepThreeLabel"}>
              <input type={"text"} name={"stepThreeEntity"} value={stepThreeEntity} onChange={this.handleChange}/>
            </label>
            <div className="btns">
              <CtaFormStepBackward currentStep={this.state.currentStep}
                                   handleParentCurrentStep={this.changeCurrentStep}/>
              {(stepThreeLocalization === "— wybierz —") || (!stepThreeLocalization) || (stepThreeHelpGroups.length === 0) ?
                <div className={"forward"}>Wybierz lokalizację oraz cel pomocy!</div> :
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