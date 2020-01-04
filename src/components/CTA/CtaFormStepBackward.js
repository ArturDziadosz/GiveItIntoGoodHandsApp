import React, {Component} from 'react';

class CtaFormStepBackward extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep
    }
  }

  handleBackward = e => {
    this.setState(state => {
      state.currentStep--;
    },()=> {
      this.props.handleParentCurrentStep(this.state.currentStep);
    })
  };

  render() {
    return (
      <div className={"backward"} onClick={this.handleBackward}>
        Wstecz
      </div>
    );
  }
}

export {CtaFormStepBackward};