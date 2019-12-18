import React, {Component} from "react";

import './HomeAbout.scss';

class HomeAbout extends Component {
  render() {
    return (
      <section className={"about"} id={"about"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"aboutBox col-8"}>
              <h2 className={"aboutTitle"}>O nas</h2>
              <div className={"decoration"}/>
              <p className={"aboutText"}>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
                celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
              <div className={"aboutSign"}/>
            </div>
            <div className={"aboutImg col-8"}/>
          </div>
        </div>
      </section>
    );
  }
}

export {HomeAbout};