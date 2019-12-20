import React, {Component} from 'react';

class FormStepCounter extends Component {
  render() {
    const {currentStep} = this.props;
    let message = null;
    switch (currentStep) {
      case 1:
        message = <p>Krok 1/4</p>;
        break;
      case 2:
        message = <p>Krok 2/4</p>;
        break;
      case 3:
        message = <p>Krok 3/4</p>;
        break;
      case 4:
        message = <p>Krok 4/4</p>;
        break;
      default:
        message = <p>Oopsss! Something goes wrong :(</p>
    }

    return (
      <>
        {message}
      </>
    );
  }
}

export {FormStepCounter};