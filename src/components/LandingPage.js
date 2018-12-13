import React, { Component } from 'react';
import '../stylesheets/landingPage.css';
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar.js';

class LandingPage extends Component {

  render() {

    return (
        <NavigationBar/>

    );
  }
}

export default LandingPage;
