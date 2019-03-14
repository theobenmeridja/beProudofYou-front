import React, { Component } from 'react';
import '../stylesheets/projectApplication.css';
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar.js';

class ProjectApplication extends Component {

  render() {

    return (
      <NavigationBar/>
    );
  }
}

export default ProjectApplication;
