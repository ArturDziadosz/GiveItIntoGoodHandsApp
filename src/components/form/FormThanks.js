import React, {Component} from 'react';
import './FormStep.scss';

class FormThanks extends Component {

  render() {
    return (
      <div className="formStep">
        <section className="container containerForm">
          <div className="row rowForm rowThanks">
            <h2>Dziękujemy za przesłanie formularza<br/>Na maila prześlemy wszelkie<br/>informacje o odbiorze.</h2>
            <div className="decoration"/>
          </div>
        </section>
      </div>
    );
  }
}

export {FormThanks};