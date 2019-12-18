import React, {Component} from "react";
import * as dataF from '../../db/foundations';
import * as dataO from '../../db/organizations';
import * as dataL from '../../db/localsGathering';

import './HomeWhoWeHelp.scss';

class HomeWhoWeHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [dataF,dataO,dataL],
      currentPage: 1,
      entityPerPage: 3,
      currentOrganization: 0,
      organizationNames: ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]
    }
  }

  handleChangePage = (e, i) => {
    this.setState({
      currentPage: i
    })
  };

  handleChangeOrganization = (e, i) => {
    this.setState({
      currentOrganization: i
    })
  };

  render() {
    const {data, currentPage, entityPerPage, currentOrganization, organizationNames} = this.state;
    const indexOfLast = currentPage * entityPerPage;
    const indexOfFirst = indexOfLast - entityPerPage;
    const viewedOrganization = data[currentOrganization].default.list.slice(indexOfFirst, indexOfLast);

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(data[currentOrganization].default.list.length / entityPerPage); i++) {
      const element = <li key={i} onClick={e => this.handleChangePage(e, i)}
                          className={currentPage === i ? "active" : ""}>{i}</li>;
      pageNumber.push(element);
    }
    if (pageNumber.length === 1) {
      pageNumber.pop();
    }

    const organizationNumber = [];
    for (let i = 0; i < organizationNames.length; i++) {
      const element = <div key={i} onClick={e=> this.handleChangeOrganization(e,i)} className={currentOrganization === i ? "active" : ""}>{organizationNames[i]}</div>;
      organizationNumber.push(element);
    }

      return (
        <section className={"whoWeHelp"} id={"whoWeHelp"}>
          <div className="container">
            <div className="row rowTitle">
              <h2 className="title">Komu pomagamy?</h2>
              <div className={"decoration"}/>
              <div className="col-16">
                {organizationNumber}
              </div>
            </div>
            <div className="row rowExplanation">{data[currentOrganization].default.explanation}</div>
            <ul className="row rowList">
              {viewedOrganization.map(entity => {
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