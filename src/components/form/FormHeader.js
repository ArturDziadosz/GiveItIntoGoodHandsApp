import React, {Component} from 'react';

import './FormHeader.scss';

class FormHeader extends Component {
  render() {
    const {currentStep} = this.props;
    let message = null;
    switch (currentStep) {
      case 1:
        message = <>
          <h3>Ważne!</h3>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
            przekazać.</p>
        </>;
        break;
      case 2:
        message = <>
          <h3>Ważne!</h3>
          <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
        </>;
        break;
      case 3:
        message = <>
          <h3>Ważne!</h3>
          <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
        </>;
        break;
      case 4:
        message = <>
          <h3>Ważne!</h3>
          <p>Podaj adres oraz termin odbioru rzeczy.</p>
        </>;
        break;
      default:
        message = <h3>Oopsss! Something goes wrong :(</h3>
    }
    return (
      <div className={"formHeader"}>
        <section className="container containerForm">
          <div className="row rowForm">
            {message}
          </div>
        </section>
      </div>
    );
  }
}

export {FormHeader};