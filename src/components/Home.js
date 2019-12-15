import React, {Component} from 'react';

import {HomeHeader} from "./home/HomeHeader";
import {HomeTreeColumns} from "./home/HomeTreeColumns";
import {Home4Steps} from "./home/Home4Steps";
import {HomeAbout} from "./home/HomeAbout";
import {HomeWhoWeHelp} from "./home/HomeWhoWeHelp";
import {HomeContact} from "./home/HomeContact";

import './Home.scss';

class Home extends Component {

  render() {
    return (
      <>
          <HomeHeader/>
          <HomeTreeColumns />
          <Home4Steps name={"fourSteps"}/>
          <HomeAbout name={"about"}/>
          <HomeWhoWeHelp name={"whoWeHelp"}/>
          <HomeContact name={"contact"}/>
      </>
    );
  }
}

export {Home};