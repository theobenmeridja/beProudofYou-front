import React, { Component } from 'react';
import '../stylesheets/landingPage.css';
import { Link } from "react-router-dom";
import {Button} from "antd";
import NavigationBar from './NavigationBar.js';

class LandingPage extends Component {

  render() {

    return (
    <div>
      <div>
        <NavigationBar/>
      </div>
      <div className="firstFrame">
        <img id="logoStyle" src={require('../images/logo_blanc_Be_Proud_of_You.png')}/>
        <h1 className="titleBeProudOfYou">Be proud of You</h1>
        <h3 className="sloganBeProudOfYou">Soyez fiers d'accompagner nos micro-entrepreneurs</h3>
        <Button className="btn-Home-Desc" >Plateforme de dons afin de soutenir la création de valeur en Afrique </Button>
      </div>
      <div className="secondFrame">

      </div>
    </div>
    )
  }
}

export default LandingPage;
