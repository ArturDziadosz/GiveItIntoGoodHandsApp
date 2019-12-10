import React, {Component} from 'react';

import './HomeTreeColumns.scss';

class HomeTreeColumns extends Component {
  render() {
    return (
      <section className={"treeColumns"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-4"}>
              <h3>10</h3>
              <p>ODDANYCH WORKÓW</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat.</p>
            </div>
            <div className={"col-4"}>
              <h3>5</h3>
              <p>WSPARTYCH ORGANIZACJI</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat.</p>
            </div>
            <div className={"col-4"}>
              <h3>7</h3>
              <p>ZORGANIZOWANY ZBIÓREK</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                Aliquam erat volutpat.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export {HomeTreeColumns};
