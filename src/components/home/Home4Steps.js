import React, {Component} from 'react';
import {CtaGive} from "../CTA/CtaGive";

import './Home4Steps.scss';

class Home4Steps extends Component {
  render() {
    return (
      <>
        <section className={"fourSteps"} id={"fourSteps"}>
          <div className={"container"}>
            <div className={"row"}>
              <h2>Wystarczą 4 proste kroki</h2>
              <div className={"decoration"}/>
            </div>
          </div>
        </section>
        <section className={"fourStepsBoxes"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-2"}>
                <div/>
                <p>Wybierz rzeczy</p>
                <p>ubrania, zabawki, sprzęt i inne</p>
              </div>
              <div className={"col-2"}>
                <div/>
                <p>Spakuj je</p>
                <p>skorzystaj z worków na śmieci</p>
              </div>
              <div className={"col-2"}>
                <div/>
                <p>Zdecyduj komu chcesz pomóc</p>
                <p>wybierz zaufane miejsce</p>
              </div>
              <div className={"col-2"}>
                <div/>
                <p>Zamów kuriera</p>
                <p>kurier przyjedzie w dogodnym terminie</p>
              </div>
            </div>
          </div>
        </section>
        <section className={"fourStepsCTA"}>
          <div className={"container"}>
            <div className={"row"}>
              <CtaGive />
            </div>
          </div>
        </section>
      </>
    )
  }
}

export {Home4Steps};