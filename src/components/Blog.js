import React, { Component } from 'react';
import '../stylesheets/blog.css';
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar.js';

class Blog extends Component {

  render() {

    return (
      <NavigationBar/>
    );
  }
}

export default Blog;
