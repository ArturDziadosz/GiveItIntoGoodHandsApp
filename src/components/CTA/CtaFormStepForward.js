import React, {Component} from 'react';

class CtaFormStepForward extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.currentStep
    }
  }

  handleForward = e => {
    this.setState(state => {
      state.currentStep++;
    },()=> {
      this.props.handleParentCurrentStep(this.state.currentStep);
    })
  };

  render() {
    return (
      <div className={"forward"} onClick={this.handleForward}>
        Dalej
      </div>
    );
  }
}

export {CtaFormStepForward};