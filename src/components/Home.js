import React, {Component} from 'react';

import {HomeHeader} from "./home/HomeHeader";
import {HomeTreeColumns} from "./home/HomeTreeColumns";
import {Home4Steps} from "./home/Home4Steps";

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
          <HomeHeader/>
          <HomeTreeColumns/>
          <Home4Steps />
      </>
    );
  }
}

export {Home};