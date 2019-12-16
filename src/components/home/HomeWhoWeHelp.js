import React, {Component} from "react";
import * as data from '../../db/foundations';

import './HomeWhoWeHelp.scss';

class HomeWhoWeHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foundations: {
        explanation: data.explanation,
        list: data.list
      },
      currentPage: 1,
      entityPerPage: 3
    }
  }

  handleChangePage = (e, i) => {
    this.setState({
      currentPage: i
    })
  };

  render() {
    const {foundations, currentPage, entityPerPage} = this.state;
    const indexOfLast = currentPage * entityPerPage;
    const indexOfFirst = indexOfLast - entityPerPage;
    const currentFoundations = foundations.list.slice(indexOfFirst,indexOfLast);

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(foundations.list.length / entityPerPage); i++) {
      const element = <li key={i} onClick={e => this.handleChangePage(e, i)} className={currentPage === i ? "active" : ""}>{i}</li>;
      pageNumber.push(element);
    }
    if (pageNumber.length === 1) {
      pageNumber.pop();
    }

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
          <div className="row rowExplanation">{foundations.explanation}</div>
          <ul className="row rowList">
            {currentFoundations.map(entity => {
              return <li key={entity.id} className={"entity"}>
                <div>
                  <p>{entity.name}</p>
                  <p>{entity.mission}</p>
                </div>
                <div>{entity.category}</div>
              </li>
            })}
          </ul>
          <div className="row">
            <ul className={"Pagination"}>
              {pageNumber}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export {HomeWhoWeHelp};