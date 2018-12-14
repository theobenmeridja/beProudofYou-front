import React, { Component } from 'react';
import '../stylesheets/gallery.css';
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar.js';

class Gallery extends Component {

  render() {

    return (
      <NavigationBar/>
    );
  }
}

export default Gallery;
