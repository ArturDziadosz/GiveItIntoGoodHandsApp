import React, {Component} from 'react';

import {HomeHeader} from "./home/HomeHeader";
import {HomeTreeColumns} from "./home/HomeTreeColumns";
import {Home4Steps} from "./home/Home4Steps";
import {HomeAbout} from "./home/HomeAbout";
import {HomeWhoWeHelp} from "./home/HomeWhoWeHelp";
import {HomeContact} from "./home/HomeContact";

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
          <HomeAbout />
          <HomeWhoWeHelp />
          <HomeContact />
      </>
    );
  }
}

export {Home};