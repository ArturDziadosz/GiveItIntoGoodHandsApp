import React, {Component} from "react";

import './HomeWhoWeHelp.scss';

class HomeWhoWeHelp extends Component {
  render() {
    return (
      <section className={"whoWeHelp"}>
        <div className="container">
          <div className="row rowTitle">
            <h2 className="title">Komu pomagamy?</h2>
            <div className={"decoration"}/>
            <div className="col-16">
              <div className={"active"}>Fundacjom</div>
              <div>Organizacjom<br/>pozarządowym</div>
              <div>Lokalnym<br/>zbiórkom</div>
            </div>
          </div>
          <div className="row rowExplanation">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
          <ul className="row rowList">
            <li className={"entity"}>
              <div>
                <p>Fundacja “Dbam o Zdrowie”</p>
                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
              </div>
              <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </li>
            <li className={"entity"}>
              <div>
                <p>Fundacja “Dla dzieci”</p>
                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
              </div>
              <div>ubrania, meble, zabawki</div>
            </li>
            <li className={"entity"}>
              <div>
                <p>Fundacja “Bez domu”</p>
                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
              </div>
              <div>ubrania, jedzenie, ciepłe koce</div>
            </li>
          </ul>
          <div className="row rowPagination">
            <p className={"active"}>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </div>
      </section>
    );
  }
}

export {HomeWhoWeHelp};