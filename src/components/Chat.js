import React, { Component } from 'react';
import '../stylesheets/chat.css';
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar.js';

class Chat extends Component {

  render() {

    return (
      <NavigationBar/>
    );
  }
}

export default Chat;
